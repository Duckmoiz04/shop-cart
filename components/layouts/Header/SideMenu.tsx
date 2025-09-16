"use client"
import React from 'react'
import Logo from './Logo'
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import SocialMedia from '../SocialMedia';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SidebarProps) => {
    const pathName = usePathname();

    return (
        <>
            <div className={`fixed inset-y-0 left-0 z-50 w-full h-screen bg-black/50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} hover-effect`} onClick={onClose}   >

            </div>
            <div className={`fixed inset-y-0 left-0 z-50 p-5 h-screen bg-white space-y-5 w-3/4 sm:w-2/3 border-t-4 border-shop-dark-green ${isOpen ? 'translate-x-0' : '-translate-x-full'} hover-effect`}>
                <div className='flex items-center justify-between '>
                    <Logo inactive className=''/>
                    <button onClick={onClose}><X className='size-7 hover:opacity-80 hover-effect text-shop-dark-green' /></button>
                </div>
                <Button className='w-full rounded-full bg-gradient-to-br from-shop-dark-green to-shop-light-green hover:opacity-90 hover-effect'>Login</Button>
                <hr className='border-black/20' />
                <div>
                    {headerData?.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className={`block py-2 hover:text-shop-light-green hover-effect text-[15px] font-medium ${pathName === item.href && 'text-shop-light-green'}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </div>
        </>
    )
}

export default SideMenu
