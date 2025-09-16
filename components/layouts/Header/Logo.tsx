import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface LogoProps {
    className?: string;
    inactive?: boolean;
    hideIcon?: boolean;
}

const Logo = ({ className, inactive, hideIcon }: LogoProps) => {
    return (
        <Link href="/" className={cn("flex items-center -ml-2", inactive && "cursor-default pointer-events-none")}>
            {!hideIcon && <svg xmlns="http://www.w3.org/2000/svg" className="size-10" viewBox="0 0 24 24" >
                <g fill="none">
                    <path fill="#063d29" d="m11.206 21l-6.883-2.859V6.23L13.498 3l6.078 2.827l-8.37 2.997z" />
                    <path fill="#3b9c3c" d="m19.677 17.823l-7.941-3.261V9.268l7.941-2.955z" />
                </g>
            </svg>}
            <h2
                className={cn(
                    "text-xl text-shop-dark-green font-bold tracking-wider",
                    "hover-effect group hover:text-shop-light-green font-montserrat",
                    className || inactive && "pointer-events-none"
                )}
            >
                Hundmoi
                <span className="text-shop-light-green">.zx</span>
            </h2>
        </Link>
    );
};

export default Logo;