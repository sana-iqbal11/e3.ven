"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const ContainedButton: FC<HTMLAttributes<HTMLButtonElement> & Props> = ({
    children,
    className,
}) => {
    return (
        <button
            className={`text-[16px] bg-[#FE9602] hover:bg-lightYellow rounded-[8px] w-fit border-none p-[9px_20px] ${className}`}
        >
            {children}
        </button>
    );
};

export default ContainedButton;
