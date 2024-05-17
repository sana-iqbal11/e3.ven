"use client";

import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const HeadingDescription: FC<HTMLAttributes<HTMLParagraphElement> & Props> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <p className={`text-center  font-[400] leading-[140%] text-white ${className}`} {...rest}>
            {children}
        </p>
    );
};

export default HeadingDescription;
