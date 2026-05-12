'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from "./IndexCarrossel.module.css";

    


    export default function IndexCarrossel() {
        useEffect(() => {
            const slides = document.querySelectorAll(`.${styles.slide}`);
            const next = document.querySelector(`.${styles.next}`);
            const prev = document.querySelector(`.${styles.prev}`);

            let index = 0;

            function mostrarSlide(i) {
                slides.forEach(slide => slide.classList.remove(styles.ativo));
                slides[i].classList.add(styles.ativo);
            }

            next.addEventListener("click", () => {
                index = (index + 1) % slides.length;
                mostrarSlide(index);
            });

            prev.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;
                mostrarSlide(index);
            });


            setInterval(() => {
                index = (index + 1) % slides.length;
                mostrarSlide(index);
            }, 5000);
        }, []);

        return (
        

        <section className={styles.carrossel}>
            <Image 
                src="/capabiblioteca.png" 
                alt="Capa da Biblioteca com o nome 'Biblioteca Rick Riordan - Desde 1976', atrás da escrita, duas pessoas conversando em meio a um corredor entre estantes de livros"
                className={styles.slide + " " + styles.ativo} 
                fill
                priority
            />
            <Image 
                src="/capa2.png" 
                alt="Espaço da biblioteca com bancos, estantes de livros e janelas." 
                className={styles.slide} 
                fill 
            />
            <Image 
                src="/capa3.png" 
                alt="Diversas estantes de livros separadas por corredores, se desfocando conforme a distância." 
                className={styles.slide} 
                fill 
            />

            <button className={styles.prev}>❮</button>
            <button className={styles.next}>❯</button>
        </section>
    )
}