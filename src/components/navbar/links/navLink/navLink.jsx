"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {

    const pathName = usePathname();

    return (
        <Link href={item.path} className={`mr-4 px-4 py-2 ${pathName === item.path && 'bg-gray-700 rounded-2xl'}`} key={item.title}>{item.title}</Link>
    );
}

export default NavLink;