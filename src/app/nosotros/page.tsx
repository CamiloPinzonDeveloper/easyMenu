import Image from 'next/image';

import styles from './Nosotros.module.scss';

const NosotrosPage = () => {
  return (
    <div className={styles.nosotros}>
      <section className={`wideContainer ${styles.discover}`}>
        <div className={styles.discoverTextContainer}>
          <h1>
            Descubre el viaje de <span>EasyMenu</span>
          </h1>
          <p>
            Fundada en 2025, EasyMenu nació de una pasión por mejorar las experiencias gastronómicas
            a través de la tecnología. Nuestra misión es brindar a los propietarios de restaurantes
            soluciones innovadoras que simplifiquen la gestión del menú y eleven la satisfacción de
            los clientes.
          </p>
          <div className={styles.discoverTextContainer__keyPoints}>
            <div>
              <div className={styles.boldPoint}>100%</div>
              <div>
                Nos dedicamos a la mejora continua y a la innovación en la industria de
                restaurantes.
              </div>
            </div>
            <div>
              <div className={styles.boldPoint}>Enfocados</div>
              <div>
                Nuestro enfoque centrado en el usuario garantiza que priorizamos sus comentarios y
                necesidades.
              </div>
            </div>
            <div>
              <div className={styles.boldPoint}>Valores</div>
              <div>
                La integridad y la transparencia están en el corazón de nuestras operaciones.
              </div>
            </div>
            <div>
              <div className={styles.boldPoint}>Trabajo en equipo</div>
              <div>
                Nuestro espíritu de colaboración nos impulsa a diseñar soluciones a la medida para
                los propietarios de restaurantes.
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/discover.webp"
            alt="Equipo de EasyMenu trabajando en una mesa"
            width={512}
            height={512}
            loading="eager"
            priority={true}
          />
        </div>
      </section>
      <section className={`wideContainer ${styles.discover}`}>
        <div>
          <Image
            src="/revo.webp"
            alt="Mesas de un resturante en la noche"
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
        <div className={styles.discoverTextContainer}>
          <h1>Revolucionando las experiencias gastronómicas</h1>
          <p>
            En EasyMenu, imaginamos un futuro donde la tecnología se integre perfectamente con la
            gastronomía, mejorando tanto la satisfacción de los clientes como la eficiencia
            operativa. Nuestro objetivo es brindar a los propietarios de restaurantes herramientas
            que simplifiquen la gestión del menú y eleven la experiencia gastronómica.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
