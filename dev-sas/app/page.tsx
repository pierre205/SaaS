"use client";

import LogoMdc from '@/public/logo.svg';
import {Typewriter, Cursor} from 'react-simple-typewriter';
import Image from "next/image";
import ButtonsProvider from './components/ButtonsProvider';
import { useSession} from 'next-auth/react';

export default function Home() {

  const {data: session} = useSession()
  console.log(session);
  
  return (
    <section className="w-full h-screen flex items-center jsutify-center flex-col gap-2">
      <Image width={100} height={100} src={LogoMdc} alt="Logo" className="mb-4 object-contain" />
    <h1 className="text-4xl md:text-6 font-black mb-2 text-center uppercase flex items-center">
      <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome", "hola"]} loop={0}/>
      <span><Cursor/></span>
    </h1>
    <p className="my-2 text-center"> Laissez place à votre créativité</p>
    <ButtonsProvider />
    </section>
  );
}

