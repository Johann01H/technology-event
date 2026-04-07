import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"

export const CustomBanner = () => {
  const socials = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61576997952712" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/datasyspal/" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@datasyspal" },
  ]

  return (
    <div className="flex flex-col items-center md:items-start px-6 md:px-0 md:ml-20 lg:ml-40 pt-10 md:pt-32">
      
      {/* Título pequeño superior */}
      <h2 className="text-white text-sm md:text-2xl font-medium tracking-widest uppercase opacity-80 text-center md:text-left">
        Legalidad y tecnología
      </h2>

      {/* Título Principal: Ajustado el tamaño para mobile (text-4xl) y corregido typo */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-poppins uppercase text-center md:text-left leading-[1.1] mt-4">
        Innovación <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">y Tecnología</span> <br />
        Palmira
      </h1>

      <div className="mt-8 text-center md:text-left w-full max-w-md md:max-w-2xl">
        
        {/* Contenedor de Badges: Cambiado a flex-wrap para que no se encimen */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
          <span className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold text-white text-[10px] md:text-sm uppercase tracking-wider">
            Taller Global de Tecnología
          </span>
          
          <a 
            href="https://chaconingenieria.com/datasys/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 rounded-full font-bold text-white text-[10px] md:text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20"
          >
            Datasys
          </a>
        </div>

        {/* Descripción: Reducido el padding lateral en mobile */}
        <p className="text-white/70 text-sm md:text-lg font-light mt-6 md:mt-10 leading-relaxed px-2 md:px-0">
          Explora el futuro digital en el evento tecnológico más importante de la región.
          <span className="hidden sm:inline"> Conferencias, talleres y networking de alto nivel.</span>
        </p>

        {/* Redes Sociales */}
        <div className="flex items-center justify-center md:justify-start gap-5 mt-10">
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}