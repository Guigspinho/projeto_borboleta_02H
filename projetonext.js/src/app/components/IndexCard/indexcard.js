import Link from 'next/link';
import styles from "./IndexCard.module.css";


export default function indexCard({ href, imageSrc, imageAlt, title, description }) {
  return (
    <section>
      <header>
        <Link href={href}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className={styles.imgcards} 
          />
        </Link>
      </header>
      <article>
        <h3 className={styles.titulosection1}>{title}</h3>
        <p className={styles.textocards}>{description}</p>
      </article>
    </section>
  );
}