import IndexCarrossel from "./components/indexcarrossel";
import TituloInicial from "./components/tituloinicial";
import Indexcard from "./components/indexcard";
import Section2 from "./components/index2section";
import Section3 from "./components/index3section";

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
      <TituloInicial texto="Conheça a nossa Biblioteca!" />
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
      <Section2 
        imgEvento="/eventoprox.jpg"
        altEvento="Dinâmica com crianças sentadas em círculo"
        tituloEvento="Eventos Próximos"
        textoEvento="Fique por dentro dos próximos eventos da biblioteca! 
          Teremos contação de histórias, oficinas educativas e atividades 
          interativas para todas as idades ao longo do mês."
        
        imgLivro="/livroemalta.jpg"
        altLivro="Livro Perigoso! Este livro contém coelhos!"
        tituloLivro="Livro em Alta"
        textoLivro="Descubra o livro em destaque da semana, escolhido pelos
         nossos leitores. Uma obra envolvente que promete encantar e despertar 
         o interesse pela leitura."
      />
      <Section3 />
    </main>


    </>
    
  );
}
