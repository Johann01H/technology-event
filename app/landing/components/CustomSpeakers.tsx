import { speakersItems } from "@/app/landing/data/spekears.data"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/ti"

export const CustomSpeakers = () => {
    
return (

    
    <div className="grid ">

    *TODO: Is pending the style of cards. 

    <div className="text-center mb-15">
        <h5 className="text-orange-600 text-2xl mb-2 font-bold">Nuestros speakers, tu inspiración.</h5>
        <h1 className=" text-[#041A57] text-6xl font-bold">Explora a nuestros speakers <br /> Seguimos creciendo cada
            semana </h1>
    </div>
    <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-3 gap-5 ">
            {
            speakersItems.map((speakears) => (
            <Card key={speakears.email} className="bg-white py-20 border-none cursor-pointer shadow-xl" >
                <CardHeader>
                    <Image 
                        src={speakears.speakerImage} 
                        alt={speakears.title}
                        className=" flex justify-center rounded-full mx-auto" 
                        width={"100"}
                        height={"100"} 
                    />
                    <CardTitle className="text-center">{speakears.title}</CardTitle>
                    <CardContent className="text-center">
                        <p>{speakears.specialty}</p>
                        <p className="text-orange-600 mb-5">{speakears.email}</p>
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
