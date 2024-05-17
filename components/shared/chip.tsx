"use client";

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Chip = ({ children }: Props) => {
    return (
        <div className="z-[-1] border-[1px] border-orange rounded-[30px] px-[15px] py-[5px] shadow-[0px_0px_19px_0px_orange] text-[14px] text-[#ffffffdd]">
            {children}
        </div>
    );
};

export default Chip;
