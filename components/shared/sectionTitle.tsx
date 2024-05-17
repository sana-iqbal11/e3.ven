"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const SectionTitle: FC<HTMLAttributes<HTMLHeadingElement> & Props> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h2
            className={`text-center font-[600] text-[30px] laptop:text-[40px] laptop:leading-[120%] mt-[12px] laptop:mt-[16px] mb-[16px] ${className}`}
            {...rest}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;
