import { speakersItems } from "@/app/landing/data/spekears.data"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/ti"

export const CustomSpeakers = () => {
    
return (
    <div className="grid px-4"> {/* Padding lateral para que no toque los bordes en mobile */}
        <div className="text-center mb-15">
            <h5 className="text-orange-600 text-2xl mb-2 font-bold">Nuestros speakers, tu inspiración.</h5>
            <h1 className="text-[#041A57] text-4xl md:text-6xl font-extrabold leading-tight">
                Explora a nuestros speakers <br className="hidden md:block" /> 
                Seguimos creciendo cada semana 
            </h1>
        </div>

        <div className="container mx-auto max-w-5xl">
            {/* GRID RESPONSIVO: 1 columna en móvil, 3 en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                speakersItems.map((speakears) => (
                <Card 
                    key={speakears.email} 
                    className="bg-white py-20 rounded-3xl border-transparent ring-0 cursor-pointer shadow-xl transition-all duration-500 hover:scale-90 hover:animate-breathe-sof" 
                >
                    <CardHeader>
                        <Image 
                            src={speakears.speakerImage} 
                            alt={speakears.title}
                            className="flex justify-center rounded-full mx-auto md:justify-center mb-7" 
                            width={150}
                            height={100} 
                        />
                        <CardTitle className="text-center font-poppins">{speakears.title}</CardTitle>
                        <CardContent className="text-center">
                            <p className="font-poppins">{speakears.specialty}</p>
                            <p className="text-orange-600 mb-5 font-poppins">{speakears.email}</p>
                            <div className="flex items-center justify-center gap-2">
                                <Avatar>
                                    <AvatarFallback>
                                        <FaFacebook className="w-6 h-6 text-black" />
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>
                                        <FaInstagram className="w-6 h-6 text-black" />
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>
                                        <TiSocialLinkedin className="w-6 h-6 text-black" />
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
                ))
                }
            </div>
        </div>
    </div>
)
}