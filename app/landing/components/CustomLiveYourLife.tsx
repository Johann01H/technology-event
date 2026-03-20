import Image from "next/image"

export const CustomLiveYourLife = () => {
return (
<div className="container mx-auto px-6 py-10 md:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div className="flex flex-col">
            <h1
                className="text-orange-600 text-[24px] md:text-[30px] mb-4 text-center md:text-justify font-bold font-poppins">
                Vive tu vida aprendiendo, creciendo y <br className="hidden md:block" /> transformándote digitalmente.
            </h1>

            <p
                className="text-[#041A57] text-3xl md:text-5xl md:leading-[1.2] font-extrabold mb-6 text-center md:text-left font-poppins">
                Atrévete a ser parte del cambio digital aprendiendo sobre Normatividad y Transformación Digital.
            </p>

            <p className="text-justify text-gray-700 md:mr-10 font-poppins">
                Reúnete con destacados expertos y conferencistas. Vive una experiencia incomparable de aprendizaje,
                innovación y networking en la conferencia más relevante del 2026.
            </p>
        </div>

        <div className="flex justify-center lg:justify-end">
            <Image src={"/images/aula-conferencia.webp"} alt="aula-image" width={550} height={600}
                className="rounded-3xl shadow-2xl object-cover" />
        </div>
    </div>
</div>
)
}
