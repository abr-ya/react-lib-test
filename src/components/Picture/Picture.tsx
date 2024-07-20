import { forwardRef, useEffect, useState } from "react";

import { Box } from "..";

import { IPictureProps, StyledPicture } from "./Picture.styles";

// TODO: Подумать как узнать размеры изображения, если не передали width & heght
export interface IProps extends IPictureProps {
  alt?: string;
  draggable?: boolean;
  height?: string | number;
  loading?: "lazy" | "eager";
  media?: string;
  onLoad?: () => void;
  onLoadError?: () => void;
  onStartLoad?: () => void;
  sizes?: string;
  skeleton?: React.ReactNode;
  src: string;
  srcSet?: string;
  style?: React.CSSProperties;
  width?: string | number;
}

export const Picture = forwardRef(
  (
    { height, onLoad, onLoadError, onStartLoad, sizes, skeleton, src, srcSet, width, ...rest }: IProps,
    ref: React.Ref<HTMLImageElement>,
  ) => {
    const [loading, setLoading] = useState<boolean>(true);

    const onPictureLoad = () => {
      onLoad && onLoad();
    };

    const onPictureLoadError = () => {
      onLoadError && onLoadError();
    };

    useEffect(() => {
      const img = new Image();
      if (skeleton) {
        img.addEventListener("load", () => {
          setLoading(false);
        });
        img.src = src;
        onStartLoad && onStartLoad();
      }

      return () => {
        if (skeleton) {
          img.removeEventListener("load", () => {
            setLoading(true);
          });
        }
      };
    }, []);

    if (loading && skeleton) {
      return <Box>{skeleton}</Box>;
    }

    return (
      <picture>
        {srcSet && <source srcSet={srcSet} />}
        <StyledPicture
          ref={ref}
          srcSet={srcSet}
          sizes={sizes}
          src={src}
          width={width}
          height={height}
          onLoad={onPictureLoad}
          onError={onPictureLoadError}
          {...rest}
        />
      </picture>
    );
  },
);
