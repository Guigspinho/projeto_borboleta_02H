export default function Section3() {
    return (
        <section className="sectionfinal"> 
            <article className="sobrenos"> 
                <h3 className="titulosobrenos">Sobre Nós</h3>
                <p>Somos um espaço dedicado ao incentivo à leitura, ao conhecimento e à cultura. Nossa missão é proporcionar um ambiente acolhedor onde todos possam aprender, explorar e se conectar através dos livros.</p>
            </article>
            <div className="local"> 
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0720126121896!2d-46.682935!3d-23.565856999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce572d94233575%3A0xac043ea588d47e1a!2sLivraria%20da%20Travessa!5e0!3m2!1spt-BR!2sbr!4v1775683529936!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>
        </section>
    )
}