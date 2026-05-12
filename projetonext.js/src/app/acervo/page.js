import TituloInicial from '../components/TituloInicial/tituloinicial';
import AcervoLivros from '../components/AcervoLivro/acervolivro';

export default function Acervo() {
    return (
        <>
            <TituloInicial texto="Nosso Acervo" />
            <main>
                <AcervoLivros />
            </main>
        </>
    );
}