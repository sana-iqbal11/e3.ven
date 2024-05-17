/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, HTMLAttributes } from "react";

interface Props {
    src: string;
    alt: string;
    className?: string;
}

const ImageBox: FC<HTMLAttributes<HTMLImageElement> & Props> = ({
    src,
    alt,
    className,
    ...rest
}) => {
    return <img src={src} alt={alt} className={`${className}`} {...rest} />;
};

export default ImageBox;
