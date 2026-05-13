import Image from 'next/image';
import styles from './ProgramacaoCard.module.css';

function Card({imgsrc, altevento, tipodeevento, nomedoevento, status }) {
    return (
        <article className={styles.programacaoeventos}>
            <Image src={imgsrc} alt={altevento} className={styles.imgprogramacaoeventos} width={300} height={200} />
            <h4 className={styles.h4tituloprogramacao}> {tipodeevento} </h4>
            <h3 className={styles.h3tituloprogramacao}> {nomedoevento} </h3>
            <p className={styles.ptituloprogramacao}> {status} </p>
        </article>
    );
}

export default function ProgramacaoCard() {
    return (
        <section className={styles.grid_programacao}>
            <Card 
                imgsrc="/saraudajuventude.jpg"
                altevento="Sarau da Juventude"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Sarau da Juventude" 
                status="Inscrições Abertas!" 
            />

            <Card 
                imgsrc="/clubedolivro.jpg"
                altevento="Grupo de pessoas discutindo sobre a leitura"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Clube do Livro" 
                status="Inscrições Abertas!" 
            />

            <Card
                imgsrc="/oficinadecolagem.png"
                altevento="Colagem"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Oficina de colagem" 
                status="Inscrições Encerradas!" 
            />
            
            <Card
                imgsrc="/oficinadecolagem.png"
                altevento="Colagem"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Oficina de colagem" 
                status="Inscrições Encerradas!" 
            />

            <Card 
                imgsrc="/saraudajuventude.jpg"
                altevento="Sarau da Juventude"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Sarau da Juventude" 
                status="Inscrições Abertas!" 
            />

            <Card
                imgsrc="/clubedolivro.jpg"
                altevento="Grupo de pessoas discutindo sobre a leitura"
                tipodeevento="EVENTO PRESENCIAL" 
                nomedoevento="Clube do Livro" 
                status="Inscrições Abertas!" 
            />
        </section>  
        
    )
}
