import Image from 'next/image';
import styles from "./Index2Section.module.css";

export default function Section2({ 
    imgEvento, altEvento, tituloEvento, textoEvento,
    imgLivro, altLivro, tituloLivro, textoLivro 
}) {
    return (
        <section className={styles.sectionpromocaoelivros}> 
            <Image 
                src={imgEvento} 
                alt={altEvento} 
                className={styles.imgsection2} 
                width={600} 
                height={400} 
            />
            <article className={styles.bloco1section2}>
                <h3 className={styles.titulo1section2}>{tituloEvento}</h3>
                <p className={styles.textosection2}>{textoEvento}</p>
            </article>

            <div className={styles.linhavertical}></div>  
            <div className={styles.linhahorizontal}></div>

            <article className={styles.bloco2section2}>
                <h3 className={styles.titulo2section2}>{tituloLivro}</h3>
                <p className={styles.textosection2}>{textoLivro}</p>
            </article>
            <Image 
                src={imgLivro} 
                alt={altLivro} 
                className={styles.imgsection2} 
                width={600} 
                height={400} 
            />
        </section>
    )
}
