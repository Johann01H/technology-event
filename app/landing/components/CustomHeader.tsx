import Image from "next/image"
import Link from "next/link"

interface Props {
    title:string,
    path: string,
}

const linksItems:Props[] = [
    {path: "#banner",title: "Home"},
    {path: "#vivetuvida",title: "Vive tu vida"},
    {path: "#speakers",title: "Spekears"},
    {path: "#inscribete",title: "inscribete"},
]

export const CustomHeader = () => {
    
    return (
    <>
        <nav className="flex items-center justify-around bg-white shadow-2xl p-5">
            <div>
                <Image
                    src={"/images/logo.webp"} 
                    alt="logo-datasys"
                    width={150}
                    height={50}
                    priority
                />
            </div>
            <div>   
                {linksItems.map((link) => (
                    <Link className="mr-4 font-bold  " key={link.path} href={link.path}>{link.title}</Link>
                ))}
            </div>
        </nav>
    </>
    )
}
