import Image from "next/image";
import styles from "./page.module.css";
import IndexCarrossel from "./components/indexcarrossel";
import TituloInicial from "./components/tituloinicial";
import Indexcard from "./components/indexcard";

export default function Home() {

  const cards = [
    {
      href: "/programacao",
      imageSrc: "cardprogramacao.jpg",
      imageAlt: "Imagem retratando a programação da biblioteca...",
      title: "Programação",
      description: "Confira a programação da nossa biblioteca, com atividades culturais, oficinas criativas e momentos especiais pensados para crianças, jovens e adultos."
    },
    {
      href: "/acervo",
      imageSrc: "cardacervo.jpg",
      imageAlt: "Imagem retratando o acervo...",
      title: "Acervo",
      description: "Explore nosso acervo com uma grande variedade de livros, desde clássicos da literatura até obras contemporâneas para todos os gostos."
    },
    {
      href: "/eventos",
      imageSrc: "cardeventos.jpg",
      imageAlt: "Imagem retratando os eventos...",
      title: "Faça o seu evento!",
      description: "Participe dos nossos eventos, como lançamentos de livros, rodas de leitura e encontros com autores que aproximam você do universo literário."
    }
  ];
  
  return (
    <>
      <IndexCarrossel />
      <TituloInicial />
      <main>
      <section className="sectioncards">
        {cards.map((card, index) => (
          <Indexcard
            key={index}
            href={card.href}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </main>
    </>
    
  );
}
