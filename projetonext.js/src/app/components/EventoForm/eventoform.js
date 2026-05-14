import styles from './EventoForm.module.css';

export default function EventoForm() {
    return (
        <section className={styles['section-evento-form']}>
            <h2>Formulário de Solicitação</h2>
            <p>Envie as informações do seu evento para que nossa equipe possa analisar a viabilidade, data prevista, duração e necessidades técnicas.</p>
            <form className={styles['formcontato']}>
                <label htmlFor="nome-realizador">Nome do realizador</label>
                <input type="text" name="nome-realizador" id="nome-realizador" placeholder="Nome do responsável" required />

                <label htmlFor="email-realizador">E-mail</label>
                <input type="email" name="email-realizador" id="email-realizador" placeholder="email@dominio.com" required />

                <label htmlFor="tipo-evento">Tipo de evento</label>
                <input type="text" name="tipo-evento" id="tipo-evento" placeholder="Lançamento, oficina, palestra..." required />

                <label htmlFor="data-prevista">Data prevista</label>
                <input type="date" name="data-prevista" id="data-prevista" required />

                <label htmlFor="duracao-evento">Duração estimada</label>
                <input type="text" name="duracao-evento" id="duracao-evento" placeholder="Ex: 2 horas" required />

                <label htmlFor="publico-estimado">Público estimado</label>
                <input type="text" name="publico-estimado" id="publico-estimado" placeholder="Número de participantes" required />

                <label htmlFor="detalhes-evento">Outras informações</label>
                <textarea name="detalhes-evento" id="detalhes-evento" rows="7" placeholder="Conte mais sobre as necessidades, temas e objetivos do evento" required></textarea>

                <button type="submit" value="Enviar" id="envio">Enviar Solicitação</button>
            </form>
        </section>
    );
}
