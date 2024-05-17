"use client";

import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const ColoredSpan: FC<HTMLAttributes<HTMLSpanElement> & Props> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <span className={`text-bold ${className}`} {...rest}>
            {children}
        </span>
    );
};

export default ColoredSpan;
