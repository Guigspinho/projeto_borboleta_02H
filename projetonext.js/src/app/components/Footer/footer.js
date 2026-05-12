import Image from 'next/image';
import styles from "./Footer.module.css";

function MembroEquipe({ src, nome }) {
    return (
        <figure className={styles.footerfigure}>
            <Image 
                src={src} 
                alt={nome} 
                className={styles.footerimgequipe} 
                width={150} 
                height={150} 
            />
            <figcaption className={styles.footernomealuno}>{nome}</figcaption>
        </figure>
    );
}

export default function Footer() {
    return (
        <footer className={styles.footerprincipal}>
            <p className={styles.footertexto} style={{ marginBottom: '30px' }}>R. dos Pinheiros, 513 - Pinheiros, São Paulo - SP, 05422-010</p>
            <p className={styles.footertexto}>Desenvolvido por:</p>
            <section className={styles.footersection}>
                <MembroEquipe src="/iconeguilherme.png" nome="Guilherme Pinho" />
                <MembroEquipe src="/iconemoabe.png" nome="Moabe Guedes" />
                <MembroEquipe src="/iconeryan.png" nome="Ryan Sousa" />
            </section>
        </footer>
    )
}