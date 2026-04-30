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
        <section className="sectioncardsacervo">
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


        </section>
    )
}