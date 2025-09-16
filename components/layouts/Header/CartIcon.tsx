import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='group relative'>
            <ShoppingBag className='hover:text-shop-light-green hover-effect size-6' />
            <span className="absolute -top-1.5 right-0 min-w-[18px] rounded-full px-1 h-4.5 bg-shop-dark-green text-[13px] font-medium flex items-center justify-center text-white hover-effect" style={{ transform: "translateX(calc(100% - 10px))" }}>
                9
            </span>
        </Link>
    )
}

export default CartIcon