import Image from "next/image"
import { Avatar } from "@/components/ui/avatar"
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdMarkEmailUnread } from "react-icons/md"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PropsItemsLinks {
title: string
path: string,
}

const ItemsLink:PropsItemsLinks[] = [
{
title: "Home",
path:"#banner",
},
{
title: "Speakers",
path:"#speakers",
},
{
title: "Inscribete",
path:"#inscribete",
},
{
title: "Vive tu vida",
path:"#vivetuvida",
}
]

export const CustomFooter = () => {
return (
<>
    <footer className="bg-[#101010] py-30 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 px-55">
            <div className="px-1">
                <Image src={"/images/logo.webp"} alt="placehold" className="text-white mb-5" width={150} height={150} />
                <p className="text-white text-[15px]">
                    Tecnología a su servicio es nuestra carta de presentación, presentamos diferentes alternativas en el
                    mercado de soluciones en tecnología,
                    una gran gama de productos de las más reconocidas marcas.
                </p>
                <div className="mt-4 space-y-2">
                    <p className="flex items-center gap-2 text-white text-[13px]">
                        <FaLocationDot className="text-orange-600 size-5" />
                        <span>Carrera 28 # 28-56 Of 301 Edif Torrepac</span>
                    </p>

                    <p className="flex items-center gap-2 text-white text-[13px]">
                        <MdMarkEmailUnread className="text-orange-600 size-5  shrink-0" />
                        <span>datasyspal@gmail.com</span>
                    </p>

                    <p className="flex items-center gap-2 text-white text-[13px]">
                        <FaPhoneAlt className="text-orange-600 size-5 shrink-0" />
                        <span>(+57) 3132315425 / (+57) 3027097117</span>
                    </p>
                </div>
            </div>
            <div className="px-30">
                <h1 className="text-white text-2xl font-bold mb-5">Páginas</h1>
                <div className="flex flex-col">
                    {
                    ItemsLink.map(( link) => (
                    <Link className="text-white mb-2  text-[13px hover:text-orange-600" key={link.path} href={ link.path }>
                    {link.title}
                    </Link>
                    ))
                    }
                </div>
            </div>
            <div className="px-10">
                <h1 className="text-white font-bold text-2xl">Redes Sociales</h1>
                <div className=" flex items center mt-4">
                    <Card 
                        className="w-12 h-12 bg-[#3b5998] rounded-full p-0 flex items-center justify-center overflow-hidden mr-1 ">
                        <FaFacebook className=" cursor-pointer size-6 text-white" />
                    </Card>
                    <Card
                        className="w-12 h-12 bg-blue-500 rounded-full p-0 flex items-center justify-center overflow-hidden mr-1">
                        <FaInstagram className="size-6 cursor-pointer text-white" />
                    </Card>
                    <Card
                        className="w-12 h-12 bg-red-500 rounded-full p-0 flex items-center justify-center overflow-hidden mr-1">
                        <FaYoutube className="size-6 cursor-pointer text-white" />
                    </Card>

                </div>
            </div>
        </div>
      </div>

    </footer>
    <div className="flex justify-center bg-black p-5">
        <h1 className="text-gray-400"> © 2025 <span className="font-bold text-orange-500"> Datasys </span> Todos los
            derechos reservados. Desarrollado con por <span className="font-bold text-orange-500">Luckycommerce
                s.a.s</span> .</h1>
    </div>
</>
)
}
