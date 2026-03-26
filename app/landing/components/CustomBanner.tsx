import {  FaFacebookF, FaInstagram } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/ti"


export const CustomBanner = () => {
return (
<div className="flex flex-col items-center md:items-start md:ml-20 lg:ml-40 lg:mt-0 pt-20 md:mt-35 ">
    <h1 className="text-white text-2xl md:text-4xl font-bold font-poppins text-center md:text-left ">
        Legalidad y tecnología
    </h1>

    <br className="hidden md:block" />

    <h1 className="text-white text-5xl md:text-8xl font-bold font-poppins uppercase  text-center md:text-left">
        Inovación <br /> y tegnología <br /> Palmira<br /> 
    </h1>

    <div className="mt-8 md:mt-5 text-center md:text-left space-y-2">

        {/* <p className="text-white text-lg md:text-base">Jueves 30 de Octubre del 2026</p>

        <p className="underline font-bold text-white max-w-sm md:max-w-none">
            Cra 28 #44 - 137 Torre A piso 3, Complejo Palma Real
        </p>

        <div className="pt-4">
            <p className="text-white opacity-90">Horario de charla</p>
            <p className="underline font-bold text-white text-xl md:text-base">8:30 AM / 11:00 AM</p>
        </div> */}
        <p className="text-white text-2xl  text-justify mt-5">
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 p-3 rounded-full font-bold  "> Taller Global de Tecnología</span> | <a
                href="https://chaconingenieria.com/datasys/" target="_blank"
                className="bg-linear-to-r from-indigo-500 via-pink-500 to-red-400 p-3 rounded-full font-bold">Datasys</a>
        </p>
        <p className="text-white text-2xl font-light text-justify mt-10 ">
            Explora el futuro digital en el evento tecnológico más <br /> importante de la región. Conferencias, talleres y networking <br /> de alto nivel.
        </p>
        <div className="flex items-center gap-3 mt-12">
            {[
            { icon:
            <FaFacebookF className="text-white" />, href: "#" },
            { icon:
            <FaInstagram className="text-white" />, href: "#" },
            { icon:
            <TiSocialLinkedin className="text-white" />, href: "#" },
            ].map((social, index) => (
            <a key={index} href={social.href}
                className="flex h-10 w-10 bg-linear-to-br from-indigo-500 via-pink-500 to-red-500  items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:text-primary transition-all shadow-sm">
                <span className="text-xl">{social.icon}</span>
            </a>
            ))}
        </div>
    </div>
</div>
)
}
