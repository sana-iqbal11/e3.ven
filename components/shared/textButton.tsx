"use client";

import { FC, HTMLAttributes, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    
}

const TextButton: FC<HTMLAttributes<HTMLButtonElement> & Props> = ({ children, className,onClick }) => {
    return <button className={`text-[16px] font-normal ${className}  `} onClick={onClick}>{children}</button>;
};

export default TextButton;
