"use client";
import Link from 'next/link';
import React from 'react';
import { headerData } from '../../../constants/data';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
    const pathName = usePathname();

    return (
        <div className="hidden lg:flex w-auto items-center gap-6 text-light-color capitalize">
            {headerData?.map((item) => (
                <Link
                    href={item.href}
                    key={item.title}
                    className={
                        `text-[15px] font-semibold hover:text-shop-light-green hover-effect relative group ${pathName === item.href && "text-shop-light-green"}`
                    }
                >
                    {item.title}
                    <span 
                        className={
                            `absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-shop-light-green hover-effect group-hover:w-full ${pathName === item.href && "w-1/3"}`
                        }
                    ></span>
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu