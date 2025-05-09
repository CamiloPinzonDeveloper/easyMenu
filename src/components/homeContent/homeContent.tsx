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
            ¡Transforme su restaurante, bar o pub con EasyMenu! Nuestra plataforma permite a los
            clientes escanear un código QR para ver tu menú, hacer pedidos sin tener que esperar al
            primer contacto físico, todo desde sus smartphones. Simplifica tus operaciones y mejora
            la satisfacción de tus clientes hoy mismo.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}> ¡Empecemos! </button>
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
      <section className={styles.keyFeatures}>
        <div className={`wideContainer ${styles.keyFeaturesContainer}`}>
          <div className={styles.keyFeaturesTextsContainer}>
            <div className={styles.keyFeaturesTitle}>
              <h2>
                Explora las <em>características clave</em> de la plataforma EasyMenu
              </h2>
            </div>
            <div className={styles.keyFeaturesDescription}>
              <p>
                Descubra cómo las innovadoras funciones de EasyMenu pueden transformar las
                operaciones de su restaurante, mejorar la satisfacción del cliente y aumentar sus
                ganancias. Desde la creación fluida de menús con códigos QR hasta el seguimiento de
                pedidos en tiempo real, le ofrecemos las herramientas que necesita para triunfar en
                el competitivo mercado actual.
              </p>
            </div>
          </div>
          <div className={styles.keyFeaturesItemsContainer}>
            <div className={styles.keyFeaturesItem}>
              <div className={styles.keyFeaturesItemImage}>
                <Image
                  src="/qr_creation.webp"
                  alt="Imagen de un código QR en un celular"
                  width={320}
                  height={240}
                  loading="lazy"
                />
              </div>
              <h3>Creación de menús QR sin esfuerzo</h3>
              <p>
                Crea y personaliza tu menú digital fácilmente. Nuestra plataforma intuitiva te
                permite actualizar artículos, precios y descripciones en tiempo real, garantizando
                que tus clientes siempre tengan acceso a las últimas ofertas.
              </p>
            </div>
            <div className={styles.keyFeaturesItem}>
              <div className={styles.keyFeaturesItemImage}>
                <Image
                  src="/tracking.webp"
                  alt="Imagen de una tablet con datos de seguimiento"
                  width={320}
                  height={240}
                  loading="lazy"
                />
              </div>
              <h3>Seguimiento de pedidos en tiempo real</h3>
              <p>
                Monitoree los pedidos desde su recepción hasta su pago con nuestro completo sistema
                de seguimiento. Manténgase informado sobre la disponibilidad de mesas, el estado de
                los pedidos y las preferencias de los clientes para optimizar su servicio y
                minimizar los tiempos de espera.
              </p>
            </div>
            <div className={styles.keyFeaturesItem}>
              <div className={styles.keyFeaturesItemImage}>
                <Image
                  src="/cellphone_customization.webp"
                  alt="Imagen de uncellular con un menú digital"
                  width={320}
                  height={240}
                  loading="lazy"
                />
              </div>
              <h3>Amplias opciones de personalización</h3>
              <p>
                Personaliza tu menú digital para que se adapte a la imagen de marca de tu
                restaurante y crea una experiencia gastronómica única para tus clientes. Personaliza
                colores, logotipos, texto de botones y más para reflejar la identidad de tu marca.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.tailored}>
        <div className={`wideContainer ${styles.tailoredContainer}`}>
          <div className={styles.tailoredTextsContainer}>
            <h2>
              <strong>
                <AnimatedUnderline text="Personaliza" className="bottom-lg" />
              </strong>{' '}
              tu menú a la perfección con EasyMenu.
            </h2>
            <p>
              Con EasyMenu, tienes el poder de crear un menú que refleje verdaderamente tu marca.
              Personaliza todo, desde los colores y logotipos hasta el texto de los botones y las
              imágenes de los productos, garantizando una experiencia única y atractiva para tus
              clientes.
            </p>
            <ul>
              <li>
                <strong>Colores del menú:</strong> Haz que coincidan con la estética de tu marca.
              </li>
              <li>
                <strong>Logos:</strong> Destaca la identidad de tu restaurante.
              </li>
              <li>
                <strong>Texto de botones:</strong> Personaliza las llamadas a la acción.
              </li>
              <li>
                <strong>Imágenes de productos:</strong> Atrae a los clientes con elementos visuales.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/tailor.webp"
              alt="Imagen de un menú digital personalizado en una tablet"
              width={512}
              height={512}
              loading="lazy"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className={styles.pricing}>
        <div className={`wideContainer ${styles.pricingContainer}`}>
          <h2 className={styles.title}>Planes y Precios</h2>
          <p className={styles.description}>
            Ofrecemos una variedad de planes para adaptarse a las necesidades de tu restaurante. Ya
            sea que estés comenzando o buscando una solución avanzada, tenemos el plan perfecto para
            ti.
          </p>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <h3>Plan Básico</h3>
              <p>Ideal para pequeños restaurantes o bares que están empezando.</p>
              <strong>$39.900 COP/mes</strong>
              <button className={styles.primary}>Ver más</button>
            </div>
            <div className={styles.plan}>
              <h3>Plan Profesional</h3>
              <p>
                Perfecto para restaurantes en crecimiento que necesitan más control y
                personalización.
              </p>
              <strong>$89.900 COP/mes</strong>
              <button className={styles.primary}>Ver más</button>
            </div>
            <div className={styles.plan}>
              <h3>Plan Premium</h3>
              <p>Diseñado para cadenas o negocios con necesidades personalizadas.</p>
              <strong>$199.900 COP/mes</strong>
              <button className={styles.primary}>Ver más</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
