import ProgramacaoCard from '../components/programacaocard';
import TituloInicial from '../components/tituloinicial';

export default function Programacao() {
    return (
        <>
            <TituloInicial texto="Programação" />
            <main>
                <ProgramacaoCard />
            </main>
        </>
    );
}