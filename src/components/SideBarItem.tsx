import Image from "next/image";
import Link from "next/link";

type SideBarItemProps = {
    icon: string;
    text: string;
    href: string;
    isActive?: boolean;
};

const SideBarItem = ({icon, text, href, isActive = false}: SideBarItemProps) => {
    return (
        <Link 
            href={href} 
            className={`flex items-center justify-start my-4 ml-4 w-full gap-2 ${isActive && "bg-iheart-red/10 text-white"}`}
        >
            <Image 
                src={icon} 
                alt={text} 
                width={24} 
                height={24} 
            />
            <span className="text-xs">{text}</span>
        </Link>
    )
}

export  default SideBarItem;