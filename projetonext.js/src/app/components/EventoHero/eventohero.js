import styles from './EventoHero.module.css';

export default function EventoHero () {
    return (
        <section className={styles["evento-hero"]}>
        <h1>Faça o seu evento conosco</h1>
        <p>Realize seu evento literário, cultural ou educacional em nossa biblioteca. Oferecemos suporte para projetos de lançamento de livro, rodas de leitura, oficinas e encontros com autores.</p>
    </section>
    )
}