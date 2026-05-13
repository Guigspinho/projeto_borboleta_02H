"use client";

import Image from 'next/image';
import Link from 'next/link';
import MudarTema from '../MudarTema/mudartema';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header className={styles.menu}>
      <MudarTema />

      <nav className={styles.links}>
        <Link href="/eventos">EVENTOS</Link> 
        <Link href="/programacao">PROGRAMAÇÃO</Link> 
        <Link href="/acervo">ACERVO</Link> 
        <Link href="/contato">CONTATO</Link> 
      </nav>
    </header>
  );
}
