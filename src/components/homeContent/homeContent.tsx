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
      <section className={`wideContainer ${styles.innovative}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Descubre las soluciones innovadoras de EasyMenu</h2>
          <div className={styles.description}>
            EasyMenu está diseñado para transformar la experiencia gastronómica, permitiendo a los
            dueños de restaurantes crear menús digitales QR <strong>sin esfuerzo</strong>. Nuestra
            plataforma optimiza la gestión de pedidos, mejora la satisfacción del cliente y ofrece
            amplias opciones de personalización para satisfacer diversas necesidades.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/innovative.webp"
            alt="Imagen de código QR"
            fill
            sizes="(max-width: 1024px)"
          />
        </div>
      </section>
      <section className={styles.features}>
        <div className={`wideContainer ${styles.featuresContainer}`}>
          <div className={styles.featureItem}>
            <div>
              <Image
                src="/contactless.webp"
                alt="Imagen de un cliente escaneando un código QR"
                width={240}
                height={327}
                loading="lazy"
              />
              <div>
                <h2>Pedidos sin contacto</h2>
                <p>
                  Mejore la experiencia del cliente con un sistema de pedidos seguro y sin contacto.
                  Los clientes pueden ver el menú fácilmente y hacer pedidos directamente desde sus
                  teléfonos.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div>
              <Image
                src="/real_time.webp"
                alt="Imagen de un cliente trabajando en un restaurante"
                width={240}
                height={327}
                loading="lazy"
              />
              <div>
                <h2>Actualización del menú en tiempo real</h2>
                <p>
                  Actualice fácilmente los artículos y precios de su menú en tiempo real. Mantenga a
                  sus clientes informados sobre los especiales diarios y los cambios al instante.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div>
              <Image
                src="/streamlined.webp"
                alt="Imagen de un computador con EasyMenu en la pantalla"
                width={240}
                height={327}
                loading="lazy"
              />
              <div>
                <h2>Gestión de pedidos optimizada</h2>
                <p>
                  Reciba notificaciones instantáneas y haga un seguimiento eficiente de sus pedidos.
                  Gestione la disponibilidad de sus mesas y marque los artículos como pagados
                  fácilmente.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div>
              <Image
                src="/customization.webp"
                alt="Imagen de un menú digital personalizado"
                width={240}
                height={327}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Amplias opciones de personalización</h2>
              <p>
                Personaliza tu menú digital para que combine con la imagen de marca de tu
                restaurante. Adapta los colores, logotipos, texto de los botones e imágenes de
                productos del menú para crear una experiencia única.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
