import { Styles } from "react-modal";

export const getCustomStyles = (
  buttonCoordinates: { right: number; top: number },
  offsetTop: number,
  isOpen: boolean,
): Styles => ({
  content: {
    top: `${buttonCoordinates.top + offsetTop}px`,
    left: "auto",
    right: `${buttonCoordinates.right}px`,
    bottom: "auto",
    width: "100%",
    height: "auto",
    maxWidth: "1080px",
    padding: "0",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.12), 0px 8px 16px -4px rgba(0, 0, 0, 0.12)",
    border: "none",
    borderRadius: "8px",
    animation: "scale 250ms",
  },
  overlay: {
    borderRadius: "8px",
    height: "100%",
    opacity: isOpen ? 1 : 0,
    transition: "opacity 300ms",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 999,
  },
});
