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