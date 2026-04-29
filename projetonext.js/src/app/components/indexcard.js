import Link from 'next/link';

export default function indexCard({ href, imageSrc, imageAlt, title, description }) {
  return (
    <section>
      <header>
        {/* No Next.js, usamos o Link para navegação interna ser instantânea */}
        <Link href={href}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="imgcards" 
          />
        </Link>
      </header>
      <article>
        <h3 className="titulosection1">{title}</h3>
        <p className="textocards">{description}</p>
      </article>
    </section>
  );
}