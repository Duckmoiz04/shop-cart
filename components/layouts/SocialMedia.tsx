import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


const socialLink = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/",
        icon: <Facebook className='size-5'/>
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/",
        icon: <Instagram className='size-5'/>
    },
    {
        title: "Twitter",
        href: "https://twitter.com/",
        icon: <Twitter className='size-5'/>
    },
    {
        title: "Youtube",
        href: "https://www.youtube.com/",
        icon: <Youtube className='size-5'/>
    }
]

const SocialMedia = () => {
    return (
        <TooltipProvider>
            <div className='flex'>
                {socialLink?.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                className='flex items-center gap-2'
                            >
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {item.icon}
                                </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{item.title}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia
