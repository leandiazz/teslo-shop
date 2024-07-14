import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { ClientButton } from "./ClientButton";

export const TopMenu = () => {

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> ~ Shop</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link href="/category/men" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Hombres
                </Link>
                <Link href="/category/women" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Mujeres
                </Link>
                <Link href="/category/kids" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline size={20} />
                </Link>
                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                            3
                        </span>
                        <IoCartOutline size={20} />
                    </div>
                </Link>

                <ClientButton />
            </div>
        </nav>
    );
};
