import Image from "next/image";
import Nav from "./nav";

export default function Header() {
    return (
        <header className="w-full flex align-middle justify-between px-12 py-5">
            <Image 
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            quality={100}
            priority={true}
            className="invert"
            />
            <Nav/>
        </header>
        
    );
}