import Image from "next/image"
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdMarkEmailUnread } from "react-icons/md"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PropsItemsLinks {
title: string
path: string,
}

const ItemsLink: PropsItemsLinks[] = [
{ title: "Home", path: "#banner" },
{ title: "Speakers", path: "#speakers" },
{ title: "Inscribete", path: "#inscribete" },
{ title: "Vive tu vida", path: "#vivetuvida" }
]

export const CustomFooter = () => {
return (
<>
    <footer className="bg-[#101010] py-16 md:py-24">
        <div className="w-full max-w-350 mx-auto px-6 sm:px-10 lg:px-16">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">

                <div className="flex flex-col items-center md:items-start w-full">
                    <Image src="/images/logo.webp" alt="Logo Datasys" className="mb-8" width={160} height={160} priority />
                    <p
                        className="text-white text-[15px] text-center md:text-left leading-relaxed max-w-sm md:max-w-none">
                        Tecnología a su servicio es nuestra carta de presentación, presentamos diferentes alternativas
                        en el
                        mercado de soluciones en tecnología.
                    </p>

                    <div className="mt-8 space-y-5 w-full">
                        <p className="flex items-start gap-4 text-white text-[13px]">
                            <FaLocationDot className="text-orange-600 size-5 shrink-0 mt-1" />
                            <span>Carrera 28 # 28-56 Of 301 Edif Torrepac</span>
                        </p>
                        <p className="flex items-center gap-4 text-white text-[13px]">
                            <MdMarkEmailUnread className="text-orange-600 size-5 shrink-0" />
                            <span>datasyspal@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-4 text-white text-[13px]">
                            <FaPhoneAlt className="text-orange-600 size-5 shrink-0" />
                            <span>(+57) 3132315425 / 3027097117</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start w-full">
                    <h1 className="text-white text-xl font-poppins font-extrabold mb-8 uppercase tracking-wider">
                        Páginas
                    </h1>
                    <div className="flex flex-col items-center md:items-start space-y-4 w-full">
                        {ItemsLink.map((link) => (
                        <Link
                            className="text-white text-[14px] hover:text-orange-600 transition-colors duration-300 w-full text-center md:text-left"
                            key={link.path} href={link.path}>
                        {link.title}
                        </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start w-full">
                    <h1 className="text-white text-xl font-poppins font-extrabold mb-8 uppercase tracking-wider">
                        Redes Sociales
                    </h1>
                    <div className="flex gap-4 justify-center md:justify-start w-full">
                        <Card
                            className="w-12 h-12 bg-[#3b5998] border-none rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(59,89,152,0.6)] transition-all cursor-pointer">
                            <FaFacebook className="size-6 text-white" />
                        </Card>
                        <Card
                            className="w-12 h-12 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 border-none rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all cursor-pointer">
                            <FaInstagram className="size-6 text-white" />
                        </Card>
                        <Card
                            className="w-12 h-12 bg-red-600 border-none rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.7)] transition-all cursor-pointer">
                            <FaYoutube className="size-6 text-white" />
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    </footer>

    <div className="bg-black py-8 px-6 text-center border-t border-gray-800">
        <h1 className="text-gray-400 text-sm leading-loose max-w-2xl mx-auto">
            © 2026 <span className="font-bold text-orange-500 font-poppins"> Datasys </span>
            Todos los derechos reservados. <br className="md:hidden" />
            Desarrollado por <span className="font-bold text-orange-500 font-poppins">JoaDev</span>.
        </h1>
    </div>
</>
)
}
