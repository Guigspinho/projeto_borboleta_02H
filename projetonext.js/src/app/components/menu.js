"use client";

import Image from 'next/image';
import Link from 'next/link';
import MudarTema from './mudartema';

export default function Menu() {
  return (
    <header className="menu">
      <MudarTema />

      <nav className="links">
        <Link href="/eventos">EVENTOS</Link> 
        <Link href="/programacao">PROGRAMAÇÃO</Link> 
        <Link href="/acervo">ACERVO</Link> 
        <Link href="/contato">CONTATO</Link> 
      </nav>
    </header>
  );
}