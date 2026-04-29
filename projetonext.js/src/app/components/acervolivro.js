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