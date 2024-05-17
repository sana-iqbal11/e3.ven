/* eslint-disable @next/next/no-img-element */
"use client";

import { ButtonHTMLAttributes, CSSProperties, FC } from "react";
import ImageBox from "./imageBox";

interface Props {
    src: string;
    alt: string;
    onClick: () => void;
    className?: string;
}

const ImageButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
    src,
    alt,
    onClick,
    className,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={`transition-all ${className}`}
            {...rest}
        >
            <ImageBox src={src} alt={alt} className="w-full h-full" />
        </button>
    );
};

export default ImageButton;
