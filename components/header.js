import Image from "next/image";
import Nav from "./nav";

export default function Header() {
    return (
        <header className="w-full">
            <Image 
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            quality={90}
            />
            <Nav/>
        </header>
        
    );
}