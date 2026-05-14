import Image from "next/image";
import styles from "./EventoIntro.module.css";

export default function EventoIntro() {
  return (
    <section className={styles["section-evento"]}>
      <article className={styles["evento-intro"]}>
        <h2>Cabeçalho</h2>
        <p>
          Preencha os dados do seu evento para que possamos ajudar com a melhor estrutura,
          divulgar para o público certo e oferecer um espaço acolhedor.
        </p>

        <ul>
          <li>Local confortável e organizado para realização de eventos</li>
          <li>Equipamentos disponíveis para apresentações e palestras</li>
          <li>Atendimento personalizado para o seu público</li>
        </ul>

        <p>
          Nosso objetivo é transformar o seu projeto em um evento inesquecível,
          com apoio da equipe da biblioteca em todas as etapas.
        </p>
      </article>

      <article className={styles["evento-image"]}>
        <Image
          src="/eventoprox.jpg"
          alt="Imagem de um evento realizado na biblioteca"
          width={500}
          height={300}
        />
      </article>
    </section>
  );
}