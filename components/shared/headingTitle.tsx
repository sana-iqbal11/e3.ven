"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const HeadingTitle: FC<HTMLAttributes<HTMLHeadingElement> & Props> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h1
            className={`text-center text-[35px] xlaptop:text-[60px] font-[600] leading-[120%] ${className}`}
            {...rest}
        >
            {children}
        </h1>
    );
};

export default HeadingTitle;
