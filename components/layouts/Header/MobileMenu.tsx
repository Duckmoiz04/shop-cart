"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    return (
        <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
                <AlignLeft className="hover:text-shop-light-green hover-effect" />
            </button>
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)}/>
        </div>
    )
}

export default MobileMenu