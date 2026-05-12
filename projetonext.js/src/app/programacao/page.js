import ProgramacaoCard from '../components/ProgramacaoCard/programacaocard';
import TituloInicial from '../components/TituloInicial/tituloinicial';

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