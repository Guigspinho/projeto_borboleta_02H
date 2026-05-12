import TituloInicial from '../components/TituloInicial/tituloinicial';
import ContatoForm from '../components/ContatoForm/contatoform';

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