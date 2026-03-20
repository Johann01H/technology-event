"use client" 

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react" 

interface Props {
    title: string,
    path: string,
}

const linksItems: Props[] = [
    { path: "#banner", title: "Home" },
    { path: "#vivetuvida", title: "Vive tu vida" },
    { path: "#speakers", title: "Speakers" },
    { path: "#inscribete", title: "Inscribete" },
]

export const CustomHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="z-50 w-full bg-white shadow-2xl">
            <nav className="flex items-center justify-between lg:justify-baseline p-5 max-w-350 mx-auto">
                {/* Logo */}
                <div className="shrink-0">
                    <Image
                        src={"/images/logo.webp"}
                        alt="logo-datasys"
                        width={150}
                        height={50}
                        priority
                    />
                </div>

                {/* Desktop Links - Ocultos en mobile */}
                <div className="hidden md:flex items-center">
                    {linksItems.map((link) => (
                        <Link 
                            className="ml-8 font-bold text-[#041A57] hover:text-orange-600 transition-colors uppercase text-sm tracking-wider" 
                            key={link.path} 
                            href={link.path}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#041A57] focus:outline-none p-2"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-5 space-y-4">
                        {linksItems.map((link) => (
                            <Link 
                                onClick={() => setIsOpen(false)} // Cerrar al hacer click
                                className="font-bold text-[#041A57] text-center hover:text-orange-600 text-lg border-b border-gray-50 pb-2" 
                                key={link.path} 
                                href={link.path}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}