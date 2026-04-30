# projeto_borboleta_02H

### Alunos:

- Guilherme Pinho - 10755529
- Moabe da Silva Guedes Rêgo - 10748053
- Ryan Silva de Sousa - 10757255

---

## Processo de Ideação

Iniciando o Projeto Borboleta (continuação direta do Projeto Lagarta), mantemos a home do site da biblioteca sem alterações, adicionando somente as novas páginas que faltaram anteriormente: Programação, Acervo, Eventos, Contato e a página de cada livro.
Para isso, buscamos referências em sites de bibliotecas, livrarias e editoras já existentes, como a do Centro Cultural de São Paulo, da Editora Aleph, Biblioteca de São Paulo, entre outras.
Ainda com o caráter extensionista, mantivemos o compromisso de apresentar um layout amigável e simples durante a navegação, além de considerar as implementações futuras de API e a migração para nextJS durante a criação dos novos wireframes, facilitando esse processo futuramente.

## Explicação do Wireframe

![imagem1](1.jpg)

Quando clicamos na aba de acervo no Menu o conteúdo do site é direcionado ao nosso catálogo de livros onde estão separados em cards contendo seu titulo e ano de lançamento, apenas como uma forma prévia de visualização para o usuário que ao clicar no livro de interesse é redirecionado para uma navegação dinâmica.

![imagem2](2.jpg)

A página mostra o livro em alta resolução e com mais detalhes sobre sua descrição, ficha técnica, preço. Essa página irá servir como modelo só mudando as informações do livro escolhido na página anterior.

![imagem3](3.jpg)

Na página de programação, temos um layout simples e semelhante ao do acervo, utilizando um card base com uma imagem, o nome do evento e a descrição do mesmo. Se repetindo pela página dependendo de quantos eventos próximos existem.

![imagem4](4.jpg)

Na página de contato, temos um formulário para que o usuário possa entrar em contato com a biblioteca, nesse formulário é necessário inserir o nome, e-mail, assunto e um texto com a explicação do assunto.

![imagem5](5.jpg)

Na página de eventos, temos uma imagem representando os eventos realizados por empresas dentro da biblioteca, com um cabeçalho “convidando” o usuário e uma descrição do que pode ser feito no local. Abaixo tem um formulário para que a biblioteca receba propostas de eventos, com os dados do realizador, informações de data, horário e quantidade de convidados, entre outros.


## Tutorial da migração do site para nextjs

### Public
Primeiramente, depois de instalar o projeto em nextjs fizemos o upload de todas as imagens para a pasta public pois é nessa pasta que elas ficam disponíveis para todo o projeto.

### Components
Para uma melhor organização e reutilização do código, migramos e dividimos todo o html e javascript em componentes. A partir disso, é possível perceber que a maioria dos componentes importam Link ou Image, isso serve para uma melhor otimização do site, fazendo as imagens carregarem automaticamente e permitindo uma navegação entre rotas para o usuário. Outro ponto importante é o uso do código "export default function(){return}", ele é uma estrutura de exportação padrão utilizada no next.js, servindo para criar aplicações rápidas com funcionalidades específicas.

#### acervolivro.js


#### contatoform.js
```javascript
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
```
No contatoform.js utilizamos o código do formulário de contato e alteramos a sintaxe de alguns pontos para a funcionalidade do mesmo, o class passa a se chamar className, o for vira htmlFor e o input passa a ter a necessidade de fechar "/".

#### footer.js
```javascript
import Image from 'next/image';

function MembroEquipe({ src, nome }) {
    return (
        <figure className="footerfigure">
            <Image 
                src={src} 
                alt={nome} 
                className="footerimgequipe" 
                width={150} 
                height={150} 
            />
            <figcaption className="footernomealuno">{nome}</figcaption>
        </figure>
    );
}

export default function Footer() {
    return (
        <footer className="footerprincipal">
            <p className="footertexto" style={{ marginBottom: '30px' }}>R. dos Pinheiros, 513 - Pinheiros, São Paulo - SP, 05422-010</p>
            <p className="footertexto">Desenvolvido por:</p>
            <section className="footersection">
                <MembroEquipe src="/iconeguilherme.png" nome="Guilherme Pinho" />
                <MembroEquipe src="/iconemoabe.png" nome="Moabe Guedes" />
                <MembroEquipe src="/iconeryan.png" nome="Ryan Sousa" />
            </section>
        </footer>
    )
}
```
No footer.js, além do export default function, também utilizamos uma função à parte para reduzir, organizar e reutilizar o código com a imagem e nome dos membros da equipe, fizemos isso a partir do uso de props, onde o componente filho recebe o conteúdo do componente pai, criando nomes como "src" e "nome" que são genéricos e podem ser alterados ao passarmos o valor para o componente pai, como é visto em "<MembroEquipe src="/iconemoabe.png" nome="Moabe Guedes" />"
