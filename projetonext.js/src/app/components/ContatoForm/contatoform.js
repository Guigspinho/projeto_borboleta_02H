export default function ContatoForm() {
    return (
        <form className="formcontato">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome:" autoFocus required />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="email@dominio.com:" required />
            
            <label htmlFor="assunto">Assunto</label>
            <input type="text" name="assunto" id="assunto" placeholder="Assunto" required />

            <label htmlFor="areatexto">Deixe a sua mensagem!</label>
            <textarea name="message" rows="6" cols="30" id="areatexto" placeholder="Deixe a sua mensagem" required></textarea>
            
            <button type="submit" value="Enviar" id="envio"> Enviar </button>
        </form>
    )
}