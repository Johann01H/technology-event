export const CustomBanner = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:ml-20 lg:ml-70 lg:mt-0 pt-20 md:mt-35 ">
        <h1 className="text-white text-2xl md:text-4xl font-bold font-poppins text-center md:text-left ">
          Legalidad y tecnología
        </h1> 
        
        <br className="hidden md:block" />
        
        <h1 className="text-white text-5xl md:text-8xl font-extrabold font-poppins uppercase  text-center md:text-left">
          Conferencia <br /> Palmira <br /> 2026 
        </h1>

        <div className="mt-8 md:mt-5 text-center md:text-left space-y-2">
          <p className="text-white text-lg md:text-base">Jueves 30 de Octubre del 2026</p>
          
          <p className="underline font-bold text-white max-w-sm md:max-w-none">
            Cra 28 #44 - 137 Torre A piso 3, Complejo Palma Real
          </p>
          
          <div className="pt-4">
            <p className="text-white opacity-90">Horario de charla</p>
            <p className="underline font-bold text-white text-xl md:text-base">8:30 AM / 11:00 AM</p>
          </div>
        </div>
    </div>
  )
}