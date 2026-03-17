import Image from "next/image"

export const CustomLiveYourLife = () => {
return (
<div className="container mx-auto">
  *TODO: Is pending the letters syle
    <div className="grid grid-cols-2 ">
        <div className="pl-31">
            <h1 className="text-orange-600 text-[30px] mb-3 text-justify font-bold pl-20 ">Vive tu vida aprendiendo, creciendo y <br />transformándote digitalmente.</h1>
            <p className="text-[#041A57] text-5xl leading-16.5 font-bold mb-5 pl-20">
                Atrévete a ser parte del cambio digital aprendiendo sobre Normatividad y Transformación Digital.
            </p>
            <p className="text-justify mr-10 pl-20">
              Reúnete con destacados expertos y conferencistas. Vive una experiencia incomparable de aprendizaje,
              innovación y networking en la conferencia más relevante del 2025.
            </p>
        </div>
        <div>
            <Image
              src={"/images/aula-conferencia.webp"}
              alt="aula-image"
              width={500}
              height={600}
              />
        </div>  
    </div>
</div>
)
}
