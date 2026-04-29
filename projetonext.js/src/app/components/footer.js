import '../globals.css'
import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="footerprincipal">
            <p className="footertexto" style={{ marginBottom: '30px' }}>R. Conselheiro Brotero, 1353 - Santa Cecilia, São Paulo - SP, 01232-011</p>
            <p className="footertexto">Desenvolvido por:</p>
            <section className="footersection">
                <figure className="footerfigure">
                    <Image src="/iconeguilherme.png" alt="Imagem de perfil do membro do grupo Guilherme Pinho" className="footerimgequipe" width={150} height={150} />
                    <figcaption className="footernomealuno">Guilherme Pinho</figcaption>
                </figure>
                <figure className="footerfigure">
                    <Image src="/iconemoabe.png" alt="Imagem de perfil do membro do grupo Moabe Guedes" className="footerimgequipe" width={150} height={150} />
                    <figcaption className="footernomealuno">Moabe Guedes</figcaption>
                </figure>
                <figure className="footerfigure">
                    <Image src="/iconeryan.png" alt="Imagem de perfil do membro do grupo Ryan Sousa" className="footerimgequipe" width={150} height={150} />
                    <figcaption className="footernomealuno">Ryan Sousa</figcaption>
                </figure>
            </section>
        </footer>
    )
}