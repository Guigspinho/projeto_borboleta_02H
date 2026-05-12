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
