import styles from './TituloInicial.module.css';

export default function TituloInicial({texto}) {
    return (
        <h1 className={styles.tituloinicial}>{texto}</h1>
    )
}
