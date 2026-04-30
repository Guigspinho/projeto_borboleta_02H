# projeto_borboleta_02H

### Alunos:

- Guilherme Pinho - 10755529
- Moabe da Silva Guedes Rêgo - 10748053
- Ryan Silva de Sousa - 10757255

---

## Processo de Ideação

Iniciando o Projeto Borboleta (continuação direta do Projeto Lagarta), mantemos a home do site da biblioteca sem alterações, adicionando somente as novas páginas que faltaram anteriormente: Programação, Acervo, Eventos, Contato e a página de cada livro.
Para isso, buscamos referências em sites de bibliotecas, livrarias e editoras já existentes, como a do Centro Cultural de São Paulo, da Editora Aleph, Biblioteca de São Paulo, entre outras.
Ainda com o caráter extensionista, mantivemos o compromisso de apresentar um layout amigável e simples durante a navegação, além de considerar as implementações futuras de API e a migração para nextJS durante a criação dos novos wireframes, facilitando esse processo futuramente.

## Explicação do Wireframe

![imagem1](1.jpg)

Quando clicamos na aba de acervo no Menu o conteúdo do site é direcionado ao nosso catálogo de livros onde estão separados em cards contendo seu titulo e ano de lançamento, apenas como uma forma prévia de visualização para o usuário que ao clicar no livro de interesse é redirecionado para uma navegação dinâmica.

![imagem2](2.jpg)

A página mostra o livro em alta resolução e com mais detalhes sobre sua descrição, ficha técnica, preço. Essa página irá servir como modelo só mudando as informações do livro escolhido na página anterior.

![imagem3](3.jpg)

Na página de programação, temos um layout simples e semelhante ao do acervo, utilizando um card base com uma imagem, o nome do evento e a descrição do mesmo. Se repetindo pela página dependendo de quantos eventos próximos existem.

![imagem4](4.jpg)

Na página de contato, temos um formulário para que o usuário possa entrar em contato com a biblioteca, nesse formulário é necessário inserir o nome, e-mail, assunto e um texto com a explicação do assunto.

![imagem5](5.jpg)

Na página de eventos, temos uma imagem representando os eventos realizados por empresas dentro da biblioteca, com um cabeçalho “convidando” o usuário e uma descrição do que pode ser feito no local. Abaixo tem um formulário para que a biblioteca receba propostas de eventos, com os dados do realizador, informações de data, horário e quantidade de convidados, entre outros.


## Tutorial da migração do site para nextjs

### Public
Primeiramente, depois de instalar o projeto em nextjs fizemos o upload de todas as imagens para a pasta public pois é nessa pasta que elas ficam disponíveis para todo o projeto.

### Components
Para uma melhor organização e reutilização do código, migramos e dividimos todo o html e javascript em componentes. A partir disso, é possível perceber que a maioria dos componentes importam Link ou Image, isso serve para uma melhor otimização do site, fazendo as imagens carregarem automaticamente e permitindo uma navegação entre rotas para o usuário. Outro ponto importante é o uso do código "export default function(){return}", ele é uma estrutura de exportação padrão utilizada no next.js, servindo para criar aplicações rápidas com funcionalidades específicas.

#### acervolivro.js
```javascript
import Image from 'next/image';

function Livro({imgsrc, altlivro, nomelivro, anovolume }) {
    return (
        <section>
            <Image src={imgsrc} alt={altlivro} className="imgcardsacervo" width={300} height={200} />
            <article>
                <h3 className="titulosection1">{nomelivro}</h3>
                <p className="textocards">{anovolume}</p>
            </article>
        </section>
    );
}

export default function AcervoLivros() {
    return (
        <section class="sectioncardsacervo">
            <Livro 
                imgsrc="/livro1.jpg"
                altlivro="Capa do mangá My Hero Academia volume 42"
                nomelivro="My Hero Academia volume" 
                anovolume="Volume 42. 2025" 
            />

            <Livro 
                imgsrc="/livro2.jpg"
                altlivro="Capa do mangá Jujutsu Kaisen volume 1"
                nomelivro="Jujutsu Kaisen" 
                anovolume="Volume 1. 2020" 
            />

            <Livro
                imgsrc="/livro3.jpg"
                altlivro="Capa do livro Percy Jackson e o Ladrão de Raios"
                nomelivro="Percy Jackson e o Ladrão de Raios" 
                anovolume="Volume 1. 2005" 
            />

            <Livro
                imgsrc="/livro4.jpg"
                altlivro="Capa do livro O Senhor dos Anéis: A Sociedade do Anel"
                nomelivro="O Senhor dos Anéis: A Sociedade do Anel" 
                anovolume="Parte 1. 1954" 
            />

            <Livro 
                imgsrc="/livro5.jpg"
                altlivro="Capa do livro O Senhor dos Anéis: As Duas Torres"
                nomelivro="O Senhor dos Anéis: As Duas Torres" 
                anovolume="Parte 2. 1954" 
            />


        </section>
    )
}
```
No acervo, começamos importando o componente Image do NextJs, ele é usado no lugar da tag <img>. Logo após isso, criamos uma função Livro, que recebe parâmetros (props) como: imgsrc - caminho da imagem; altlivro - texto alternativo da imagem; nomelivro - nome do livro; anovolume - volume e ano do livro. Depois disso, ele retorna o componente Image, que nele renderiza a imagem do livro, o titulo do livro que está em h3 e um texto com volume e ano do livro. Logo após, o componente principal, que é o AcervoLivros sendo chamado no export default function. Depois disso, colocamos a estrutura dentro de um className chamado sectioncardacervo. E por fim, fazemos a reutilização do componente, onde usamos o componente Livro varias vezes para criar um card (cada <Livro /> cria um card diferente.)

#### contatoform.js
```javascript
export default function ContatoForm() {
    return (
        <form className="formcontato">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome:" autoFocus required />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="email@dominio.com:" required />
            
            <label htmlFor="assunto">Assunto</label>
            <input type="text" name="assunto" id="assunto" placeholder="Assunto" required />

            <label htmlFor="areatexto">Deixe a sua mensagem!</label>
            <textarea name="message" rows="6" cols="30" id="areatexto" placeholder="Deixe a sua mensagem" required></textarea>
            
            <button type="submit" value="Enviar" id="envio"> Enviar </button>
        </form>
    )
}
```
No contatoform.js utilizamos o código do formulário de contato e alteramos a sintaxe de alguns pontos para a funcionalidade do mesmo, o class passa a se chamar className, o for vira htmlFor e o input passa a ter a necessidade de fechar "/".

#### footer.js
```javascript
import Image from 'next/image';

function MembroEquipe({ src, nome }) {
    return (
        <figure className="footerfigure">
            <Image 
                src={src} 
                alt={nome} 
                className="footerimgequipe" 
                width={150} 
                height={150} 
            />
            <figcaption className="footernomealuno">{nome}</figcaption>
        </figure>
    );
}

export default function Footer() {
    return (
        <footer className="footerprincipal">
            <p className="footertexto" style={{ marginBottom: '30px' }}>R. dos Pinheiros, 513 - Pinheiros, São Paulo - SP, 05422-010</p>
            <p className="footertexto">Desenvolvido por:</p>
            <section className="footersection">
                <MembroEquipe src="/iconeguilherme.png" nome="Guilherme Pinho" />
                <MembroEquipe src="/iconemoabe.png" nome="Moabe Guedes" />
                <MembroEquipe src="/iconeryan.png" nome="Ryan Sousa" />
            </section>
        </footer>
    )
}
```
No footer.js, além do export default function, também utilizamos uma função à parte para reduzir, organizar e reutilizar o código com a imagem e nome dos membros da equipe, fizemos isso a partir do uso de props, onde o componente filho recebe o conteúdo do componente pai, criando nomes como "src" e "nome" que são genéricos e podem ser alterados ao passarmos o valor para o componente pai, como é visto em "<MembroEquipe src="/iconemoabe.png" nome="Moabe Guedes" />". Ao migrar para o nextjs, também passamos a ter a necessidade de passar os valores de width e height para o Image e o uso de chaves duplas para utilizar style inline.

#### index2section.js
```javascript
import Image from 'next/image';

export default function Section2({ 
    imgEvento, altEvento, tituloEvento, textoEvento,
    imgLivro, altLivro, tituloLivro, textoLivro 
}) {
    return (
        <section className="sectionpromocaoelivros"> 
            <Image 
                src={imgEvento} 
                alt={altEvento} 
                className="imgsection2" 
                width={600} 
                height={400} 
            />
            <article className="bloco1section2">
                <h3 className="titulo1section2">{tituloEvento}</h3>
                <p className="textosection2">{textoEvento}</p>
            </article>
            
            <div className="linhavertical"></div>  
            <div className="linhahorizontal"></div>

            <article className="bloco2section2">
                <h3 className="titulo2section2">{tituloLivro}</h3>
                <p className="textosection2">{textoLivro}</p>
            </article>
            <Image 
                src={imgLivro} 
                alt={altLivro} 
                className="imgsection2" 
                width={600} 
                height={400} 
            />
        </section>
    )
}
```
No index 2, começamos com a importação do componente Image do NextJs. Logo em seguida, criamos um componente reutilizável. Ele recebe 8 props, que são duas partes:
parte do evento: imgEvento, altEvento, tituloEvento e textoEvento;
parte do livro: imgLivro, altLivro, tituloLivro e textoLivro.
Depois, começamos com a estrutura geral utilizando o section, que é o container principal. Em seguida, escrevemos a primeira parte (Evento) onde mostra a imagem do evento. Nele colocamos altura, largura, src, alt e className. E logo a baixo, usamos article, para mostrar o titulo e a descrição do livro. Colocamos também elementos visuais (divisores), nele tem div's que são só para estilo (linha vertical e horizontal). E para finalizar, fazemos a segunda parte (livro), nele colocamos um article que exibe o texto do livro e em seguida, abrimos um Image para exibir a imagem do livro.

#### index3section.js
```javascript
export default function Section3() {
    return (
        <section className="sectionfinal"> 
            <article className="sobrenos"> 
                <h3 className="titulosobrenos">Sobre Nós</h3>
                <p>Somos um espaço dedicado ao incentivo à leitura, ao conhecimento e à cultura. Nossa missão é proporcionar um ambiente acolhedor onde todos possam aprender, explorar e se conectar através dos livros.</p>
            </article>
            <div className="local"> 
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0720126121896!2d-46.682935!3d-23.565856999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce572d94233575%3A0xac043ea588d47e1a!2sLivraria%20da%20Travessa!5e0!3m2!1spt-BR!2sbr!4v1775683529936!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
        </section>
    )
}
```
No terceiro section retornamos o código base dele, apenas dividindo por linha os valores do iframe para maior facilidade quando houver a necessidade de alteração dos mesmos.

#### indexcard.js
```javascript
import Link from 'next/link';

export default function indexCard({ href, imageSrc, imageAlt, title, description }) {
  return (
    <section>
      <header>
        <Link href={href}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="imgcards" 
          />
        </Link>
      </header>
      <article>
        <h3 className="titulosection1">{title}</h3>
        <p className="textocards">{description}</p>
      </article>
    </section>
  );
}
```
No indexcard.js retornamos a função indexCard com os próprios props no lugar dos valores para alterar eles diretamente na página principal ao criar uma constante (explicação mais a frente no tópico da page.js da Home.

#### indexcarrossel.js
```javascript
'use client';
import Image from 'next/image';
import { useEffect } from 'react';

    


    export default function IndexCarrossel() {
        useEffect(() => {
            const slides = document.querySelectorAll(".slide");
            const next = document.querySelector(".next");
            const prev = document.querySelector(".prev");

            let index = 0;

            function mostrarSlide(i) {
                slides.forEach(slide => slide.classList.remove("ativo"));
                slides[i].classList.add("ativo");
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
        

        <section className="carrossel">
            <Image 
                src="/capabiblioteca.png" 
                alt="Capa da Biblioteca com o nome 'Biblioteca Rick Riordan - Desde 1976', atrás da escrita, duas pessoas conversando em meio a um corredor entre estantes de livros"
                className="slide ativo" 
                fill
                priority
            />
            <Image 
                src="/capa2.png" 
                alt="Espaço da biblioteca com bancos, estantes de livros e janelas." 
                className="slide" 
                fill 
            />
            <Image 
                src="/capa3.png" 
                alt="Diversas estantes de livros separadas por corredores, se desfocando conforme a distância." 
                className="slide" 
                fill 
            />

            <button className="prev">❮</button>
            <button className="next">❯</button>
        </section>
    )
}
```
No indexcarrossel.js, importamos e utilizamos o useEffect para rodar o javascript dentro do nextjs, também havendo a utilização do 'use client' para definir que o código possui interatividade no navegador. 
Já na hora de retornar o html, utilizamos o "fill" no Image para a imagem preencher todo o espaço do contâiner pai, sem a necessidade de definir tamanho, além de utilizar o priority na imagem de capa principal do carrossel, pré-carregando a mesma para melhorar o tempo de carregamento dela.

#### programacaocard.js
```javascript
import Image from 'next/image';

function Card({imgsrc, altevento, tipodeevento, nomedoevento, status }) {
    return (
        <article className="programacaoeventos">
            <Image src={imgsrc} alt={altevento} className="imgprogramacaoeventos" width={300} height={200} />
            <h4 className="h4tituloprogramacao"> {tipodeevento} </h4>
            <h3 className="h3tituloprogramacao"> {nomedoevento} </h3>
            <p className="ptituloprogramacao"> {status} </p>
        </article>
    );
}

export default function ProgramacaoCard() {
    return (
        <section className="grid_programacao">
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
```
Na programação, começamos com a importação do componente Image no NextJs. Logo depois, fizemos uma função Card onde ele recebe como props: imgsrc, altevento, tipodeevento, nomedoevento e status. Após isso, abrimos um article onde nele, cada card é um article. Em seguida abrimos um Image tendo configurações padrão de uma imagem (altura, largura, className, src e alt). Em seguida tem um conteúdo, que seria o tipo do evento, nome e status. Logo após, abrimos um export default e em seguida uma section com className. Pra finalizar, fizemos uma repetição de cards, onde nele abrimos <Card> e dentro dele tem todos os parâmetros da função que colocamos antes. Cada um desse vira um card na tela.

#### tituloinicial.js
```javascript
export default function TituloInicial({texto}) {
    return (
        <h1 className="tituloinicial">{texto}</h1>
    )
}
```

No tituloinicial.js, retornamos a função com um prop para alterar o texto em cada page.js, visto que, toda página tem um título na hora que entramos nela.

### globals.css e page.module.css
No globals.css colamos todo o css que já existia, deixando o page.module.css sem alterações para modularizar o css em breve.

### favicon.ico
Ícone que aparece do lado do nome do site.

### layout.js
```javascript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biblioteca Rick Riordan",
  description: "Site da biblioteca Rick Riordan, com informações sobre eventos, programação, acervo e contato.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body><Menu />{children}<Footer /></body>
    </html>
  );
}
```
Define uma estrutura de interface que será utilizada por todas as páginas, onde colocamos as fontes, os metadados do site, ícone e a estrutura do site que será usada em todas as páginas: Menu vindo antes de todo o conteúdo do body e o footer depois.

### page.js
```javascript
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
```
A page.js que está apenas dentro do src/app é a Home do site. Importamos todos os componentes que serão utilizados no site, após isso, criamos uma const com os valores dos cards do primeiro section (atribuindo um endereço, uma imagem, um alt, um título e uma descrição para cada uma). Por fim, retornamos o site colocando em ordem cada componente, a tag de main e inserindo os valores dos props para o que faltou.
