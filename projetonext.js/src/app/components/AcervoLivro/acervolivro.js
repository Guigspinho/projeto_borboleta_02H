import Image from 'next/image'
import Link from 'next/link'

import styles from './AcervoLivro.module.css'

import { produtos } from '../data/produtosarray'

export default function AcervoLivros() {
  return (
    <section className={styles.sectioncardsacervo}>

      {produtos.map((livro) => (

        <Link
          key={livro.id}
          href={`/produtos/${livro.id}`}
        >

          <section>

            <Image
              src={livro.imagem}
              alt={livro.nome}
              className={styles.imgcardsacervo}
              width={300}
              height={200}
            />

            <article>

              <h3 className={styles.titulosection1}>
                {livro.nome}
              </h3>

              <p className={styles.textocards}>
                {livro.volume}
              </p>

            </article>

          </section>

        </Link>

      ))}

    </section>
  )
}