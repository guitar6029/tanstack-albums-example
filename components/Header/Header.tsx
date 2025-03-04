"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {


  const path = usePathname()

  return (
    <div className="h-[5rem] p-2 flex flex-row items-center gap-2 bg-neutral-600">
      <Link href={'/'}  className={`text-2xl font-bold p-3 ${path === '/' ? 'bg-black text-white' : 'bg-none'}`}>Home</Link>
      <Link href={'/services'} className={`text-2xl font-bold p-3 ${path === '/services' ? 'bg-black text-white' : 'bg-none'}`}>Services</Link>
      <Link href={'/about'} className={`text-2xl font-bold p-3 ${path === '/about' ? 'bg-black text-white' : 'bg-none'}`}>About</Link>
      <Link href={'/contact'} className={`text-2xl font-bold p-3 ${path === '/contact' ? 'bg-black text-white' : 'bg-none'}`}>Contact</Link>

    </div>
  );
}
