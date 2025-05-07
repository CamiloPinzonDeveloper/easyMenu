import Image from 'next/image';
import AnimatedUnderline from '../AnimatedUnderline/AnimatedUnderline';
import styles from './HomeContent.module.scss';

export default function HomeContent() {
  return (
    <>
      <section className={`${styles.hero}`}>
        <div className={styles.imageContainer}>
          <Image
            src="/introduction_image.webp"
            alt="Imagen de un restaurante con un menú digital"
            loading="eager"
            fill
            priority
            className={styles.image}
          />
        </div>
        <div className={`${styles.content}`}>
          <h1>
            Menús digitales
            <strong>
              {' '}
              <AnimatedUnderline text="sencillos" />{' '}
            </strong>
            <em>para cada mesa</em>
          </h1>
          <p>
            ¡Transforma tu restaurante, bar o pub con EasyMenu! Nuestra plataforma permite a los
            clientes escanear un código QR para ver tu menú, hacer pedidos sin tener que esperar al
            primer contacto físico, todo desde sus smartphones. Simplifica tus operaciones y mejora
            la satisfacción de tus clientes hoy mismo.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>Learn More</button>
            <button className={styles.outline}>Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}
