import '../globals.css'
import Image from 'next/image';

    export default function IndexCarrossel() {
    return (
        <section class="carrossel">
            <Image src="/capabiblioteca.png" className="slide ativo" fill />
            <Image src="/capa2.png" className="slide" fill />
            <Image src="/capa3.png" className="slide" fill />
        
            <button className="prev">❮</button>
            <button className="next">❯</button>
        </section>
    )
}