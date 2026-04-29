import TituloInicial from '../components/tituloinicial';
import ContatoForm from '../components/contatoform';

export default function Contato() {
    return (
        <>
            <TituloInicial texto="Contato" />
            <main>
                <ContatoForm />
            </main>
        </>
    );
}