"use client";

import Link from "next/link";
import LogoMdc from '@/public/logo.svg';
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">

        <div>
            <Link href='/'>
                <Image width={100} height={100} src={LogoMdc} alt="Logo" className="w-12 h-12" />
            </Link>
        </div>

        <div className="flex items-center gap4">
            <ThemeToggle />
        </div>
    </nav>
  )
}
