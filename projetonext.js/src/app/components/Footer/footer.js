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