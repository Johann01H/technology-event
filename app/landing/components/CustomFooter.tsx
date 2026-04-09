"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

const footerLinks = {
    evento: [
    { name: "Home", href: "#banner" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Speakers", href: "#speakers" },
    { name: "Portafolio", href: "#portafolio" },
    ],
    recursos: [
    { name: "Blog", href: "#" },
    { name: "Noticias", href: "#" },
    { name: "Recursos Digitales", href: "#" },
    { name: "FAQ", href: "#" },
    ],
    legal: [
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Política de Cookies", href: "#" },
    ],
}

export function CustomFooter() {
return (
<footer className="relative bg-slate-950 overflow-hidden">
    {/* Top Gradient Border */}
    <div className="h-px bg-linear-to-r from-transparent via-fuchsia-500 to-transparent" />

    {/* Background Effects */}
    <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>

    {/* Newsletter Section */}
    <div className="relative border-b border-slate-800">
        <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Mantente{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-cyan-400">
                            Informado
                        </span>
                    </h3>
                    <p className="text-slate-400">
                        Suscríbete y recibe las últimas novedades del evento
                    </p>
                </div>
                <div className="flex w-full lg:w-auto">
                    <div className="relative flex-1 lg:w-80">
                        <input type="email" placeholder="Tu correo electrónico"
                            className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-l-full text-white placeholder:text-slate-500 focus:outline-none focus:border-fuchsia-500 transition-colors" />
                    </div>
                    <button
                        className="px-6 py-4 bg-linear-to-r from-fuchsia-600 to-fuchsia-500 rounded-r-full text-white font-semibold hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 group">
                        Suscribir
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    </div>

    {/* Main Footer */}
    <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                    <Image src={"/images/logo.webp"} alt="logo-datasys" width={150} height={50} priority />

                </div>
                <p className="text-slate-400 mb-6 max-w-sm">
                    Innovación y Tecnología Palmira - El evento tecnológico más importante de la región.
                    Conferencias, talleres y networking de alto nivel.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                    <a href="mailto:datasyspal@gmail.com"
                        className="flex items-center gap-3 text-slate-400 hover:text-fuchsia-400 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>datasyspal@gmail.com</span>
                    </a>
                    <a href="tel:+573001234567"
                        className="flex items-center gap-3 text-slate-400 hover:text-fuchsia-400 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>(+57) 3239442725 | 3027097117</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-400">
                        <MapPin className="w-5 h-5 shrink-0" />
                        <span>Cra 28 # 28-56 oficina 301 Edificio Torrepac | Palmira  </span>
                    </div>
                </div>
            </div>

            {/* Links Columns */}
            <div>
                <h4 className="text-white font-semibold mb-6 text-lg">Evento</h4>
                <ul className="space-y-3">
                    {footerLinks.evento.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}
                            className="text-slate-400 hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2 group">
                        <span className="w-0 h-px bg-fuchsia-400 group-hover:w-4 transition-all duration-300" />
                        {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6 text-lg">Recursos</h4>
                <ul className="space-y-3">
                    {footerLinks.recursos.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}
                            className="text-slate-400 hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2 group">
                        <span className="w-0 h-px bg-fuchsia-400 group-hover:w-4 transition-all duration-300" />
                        {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
                <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}
                            className="text-slate-400 hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2 group">
                        <span className="w-0 h-px bg-fuchsia-400 group-hover:w-4 transition-all duration-300" />
                        {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>

                {/* Event Date Badge */}
                {/* <div
                    className="mt-8 p-4 bg-linear-to-br from-fuchsia-500/10 to-cyan-500/10 border border-fuchsia-500/20 rounded-xl">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Próximo Evento</p>
                    <p className="text-white font-bold">15-17 Mayo 2026</p>
                    <p className="text-cyan-400 text-sm">Palmira, Colombia</p>
                </div> */}
            </div>
        </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm text-center md:text-left">
                    © 2026 Datasys. Todos los derechos reservados. Desarrollado con pasión en Colombia.
                </p>
                <div className="flex items-center gap-6">
                    <span className="text-slate-600 text-sm">Desarrollado por</span>
                    <div className="flex items-center gap-2">
                        <Image 
                            className="rounded-full"
                            alt="image-JoaDev"
                            src={"/images/avatar-johann.png"}
                            width={25}
                            height={25}
                        />
                        <span className="text-slate-400 font-medium cursor-pointer hover:text-white" ><a href="https://johanndev.online/" target="_blank" >JoaDev</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-20 left-10 w-16 h-16 border border-fuchsia-500/20 rotate-45 hidden lg:block" />
    <div className="absolute top-40 right-20 w-12 h-12 border border-cyan-500/20 rotate-12 hidden lg:block" />
</footer>
)
}
