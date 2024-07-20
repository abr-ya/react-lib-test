import { useEffect, useRef } from "react";
import throttle from "lodash/throttle";

export type PortalPosition = "TopLeft" | "TopRight" | "BottomRight" | "BottomLeft";

interface PortalPositionParams<T extends HTMLElement> {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  portalMargin?: number;
  position?: PortalPosition;
  wrapperRef?: React.RefObject<T>;
  portalRef?: React.RefObject<HTMLDivElement>;
  shouldSyncPortalWidth?: boolean;
}

interface PortalPositionReturn<T> {
  innerWrapperRef: React.RefObject<T>;
  innerPortalRef: React.RefObject<HTMLDivElement>;
}

const DEFAULT_PORTAL_MARGIN = 4;
const DEFAULT_THROTTLE_TIMEOUT = 20;

const stopPropagation = (event: Event): void => {
  event.stopPropagation();
  event.stopImmediatePropagation();
};

export function usePortalPosition<T extends HTMLElement>({
  isOpen,
  setOpen,
  portalMargin = DEFAULT_PORTAL_MARGIN,
  position = "BottomRight",
  shouldSyncPortalWidth = false,
  wrapperRef,
  portalRef,
}: PortalPositionParams<T>): PortalPositionReturn<T> {
  const innerWrapperRef = !wrapperRef ? useRef<T>(null) : wrapperRef;
  const innerPortalRef = !portalRef ? useRef<HTMLDivElement>(null) : portalRef;

  useEffect(() => {
    const calculatePosition = (): void => {
      if (!innerWrapperRef.current || !innerPortalRef.current) {
        return;
      }
      const wrapperRect = innerWrapperRef.current.getBoundingClientRect();
      const portalRect = innerPortalRef.current.getBoundingClientRect();
      let x = 0;
      let y = 0;
      switch (position) {
        case "TopLeft":
          x = wrapperRect.left;
          y = wrapperRect.top - portalRect.height - portalMargin;
          break;
        case "TopRight":
          x = wrapperRect.left + wrapperRect.width - portalRect.width;
          y = wrapperRect.top - portalRect.height - portalMargin;
          break;
        case "BottomRight":
          x = wrapperRect.left + wrapperRect.width - portalRect.width;
          y = wrapperRect.top + wrapperRect.height + portalMargin;
          break;
        case "BottomLeft":
          x = wrapperRect.left;
          y = wrapperRect.top + wrapperRect.height + portalMargin;
          break;
        default:
        // nothing to do here
      }
      innerPortalRef.current.style.top = `${y + 4}px`;
      innerPortalRef.current.style.left = `${x}px`;
      innerPortalRef.current.style.visibility = "visible";
      innerPortalRef.current.style.display = "block";

      if (shouldSyncPortalWidth) {
        innerPortalRef.current.style.width = `${innerWrapperRef.current.clientWidth}px`;
      }
    };
    const node = innerPortalRef.current;
    const wrapperNode = innerWrapperRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          return;
        }
        setOpen(false);
      },
      {
        root: null,
        threshold: 0.4,
      },
    );
    const throttledCalcPosition = throttle(calculatePosition, DEFAULT_THROTTLE_TIMEOUT);
    if (isOpen) {
      calculatePosition();
      node?.addEventListener("mousedown", stopPropagation);
      if (wrapperNode) {
        observer.observe(wrapperNode);
      }
      window.document.addEventListener("scroll", throttledCalcPosition, true);
      window.addEventListener("resize", throttledCalcPosition);
    }
    return (): void => {
      if (isOpen) {
        node?.removeEventListener("mousedown", stopPropagation);
        if (wrapperNode) {
          observer.unobserve(wrapperNode);
        }
        window.document.removeEventListener("scroll", throttledCalcPosition, true);
        window.removeEventListener("resize", throttledCalcPosition);
      }
    };
  }, [isOpen, setOpen, position, portalMargin, innerWrapperRef, innerPortalRef, shouldSyncPortalWidth]);

  return {
    innerWrapperRef,
    innerPortalRef,
  };
}
