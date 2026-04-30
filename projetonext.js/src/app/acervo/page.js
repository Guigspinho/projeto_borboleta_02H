import TituloInicial from '../components/tituloinicial';
import AcervoLivros from '../components/acervolivro';

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