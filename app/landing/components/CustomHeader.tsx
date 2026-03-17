import Image from "next/image"
import Link from "next/link"

interface Props {
    title:string,
    path: string,
}

const linksItems:Props[] = [
    {path: "/",title: "Home"},
    {path: "#vivetuvida",title: "Vive tu vida"},
    {path: "#speakers",title: "Spekears"},
    {path: "#inscribete",title: "inscribete"},
]

export const CustomHeader = () => {
    
    return (
    <>
        <nav className="flex items-center justify-between bg-gray-500 p-4">
            <div>
                <Image
                    src={"/assets/images/logo.webp"} 
                    alt="logo-datasys"
                    width={100}
                    height={50}
                />
            </div>
            <div>
                {linksItems.map((link) => (
                    <Link className="mr-4" key={link.path} href={link.path}>{link.title}</Link>
                ))}
            </div>
        </nav>
    </>
    )
}
