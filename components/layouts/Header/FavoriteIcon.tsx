import { Heart } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const FavoriteIcon = () => {
    return (
        <Link href="/favorite" className='group relative'>
            <Heart className='hover:text-shop-light-green hover-effect size-[26px]' />
            <span className="absolute -top-[5px] right-0 min-w-[18px] rounded-full px-1 h-4.5 bg-shop-dark-green text-[13px] font-medium flex items-center justify-center text-white hover-effect" style={{ transform: "translateX(calc(100% - 10px))" }}>
                9
            </span>
        </Link>
    )
}

export default FavoriteIcon