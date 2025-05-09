import Image from 'next/image';

import AnimatedUnderline from '@/components/AnimatedUnderline/AnimatedUnderline';

import styles from './Caracteristicas.module.scss';

const CaracteristicasPage = () => {
  return (
    <div className={styles.container}>
      <div className={`wideContainer ${styles.headerContainer}`}>
        <h1 className={styles.title}>Una nueva forma de operar tu restaurante</h1>
        <p className={styles.description}>
          Moderniza tu local con herramientas inteligentes para pedidos, personalización del menú,
          analíticas y mucho más.{' '}
          <AnimatedUnderline
            text="Más eficiencia, menos esfuerzo"
            color="#283566"
            bottom="bottom-xl"
          />
          .
        </p>
      </div>
      <div className={`wideContainer ${styles.featuresContainer}`}>
        <div className={styles.feature}>
          <div>
            <Image
              src="/customizable_features.webp"
              alt="customizable features"
              width={512}
              height={512}
              loading="eager"
              priority={true}
            />
          </div>
          <div>
            <h3>Menú Digital Personalizable</h3>
            <p>
              Diseña un menú digital que refleje la identidad de tu restaurante. Puedes ajustar el
              color de fondo, colores principales y secundarios, el estilo de botones y los textos,
              además de subir el logo de tu marca. Esto permite ofrecer a tus clientes una
              experiencia visual coherente, moderna y profesional, desde cualquier dispositivo.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <h3>Códigos QR únicos por mesa</h3>
            <p>
              Crea fácilmente códigos QR individuales para cada mesa de tu local. Los clientes solo
              deben escanear el código con su celular para acceder al menú digital, ver los
              productos disponibles y realizar su pedido directamente, sin tener que esperar al
              mesero. Esto reduce los tiempos de atención y mejora la eficiencia del servicio.
            </p>
          </div>
          <div>
            <Image src="/uniqe_qr.webp" alt="Qr menu" width={512} height={512} loading="lazy" />
          </div>
        </div>
        <div className={styles.feature}>
          <div></div>
          <div>
            <h3>Pedidos en tiempo real</h3>
            <p>
              Recibe los pedidos al instante en el panel de administración. Podrás ver qué productos
              ha solicitado cada mesa y comenzar su preparación de inmediato. El sistema permite
              tener un control claro y ordenado del flujo de pedidos, ideal para cocinas rápidas o
              locales con alta rotación.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <h3>Gestión completa de productos y combos</h3>
            <p>
              Agrega productos de forma sencilla, incluyendo imagen, descripción, precio y
              descuentos. También puedes combinar productos existentes para crear combos, ideal para
              promociones o paquetes especiales. Todo se puede gestionar desde el panel sin
              necesidad de conocimientos técnicos.
            </p>
          </div>
          <div></div>
        </div>
        <div className={styles.feature}>
          <div></div>
          <div>
            <h3>Promociones programables con fecha y hora</h3>
            <p>
              Activa promociones o combos que comiencen y terminen en fechas y horarios específicos.
              Por ejemplo, puedes lanzar un combo especial solo los fines de semana o una bebida
              gratuita durante el happy hour. Automatiza tu estrategia comercial sin necesidad de
              estar pendiente.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <h3>Resumen detallado y total por mesa</h3>
            <p>
              Desde el panel, puedes ver qué ha pedido cada mesa, calcular automáticamente el total
              a pagar y marcar la mesa como &quot;pagada&quot; para liberarla. Esto facilita la
              gestión del salón y permite tener un mejor control del estado de cada mesa y del flujo
              de ventas.
            </p>
          </div>
          <div></div>
        </div>
        <div className={styles.feature}>
          <div></div>
          <div>
            <h3>Notificaciones instantáneas de pedidos</h3>
            <p>
              Cada vez que un cliente realiza un pedido, el sistema envía una notificación con los
              detalles: nombre del cliente, mesa y productos solicitados. Así, el equipo puede
              actuar rápidamente y no se pierde ningún pedido, incluso en horarios de alta demanda.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <h3>Panel de administración intuitivo</h3>
            <p>
              Administra todas las funciones de tu restaurante digital desde un panel fácil de usar.
              Desde allí puedes editar el menú, agregar productos, configurar colores, generar
              códigos QR y revisar los pedidos. Todo el poder de gestión en un solo lugar, desde tu
              celular, tablet o computador.
            </p>
          </div>
          <div></div>
        </div>
        <div className={styles.feature}>
          <div></div>
          <div>
            <h3>Acceso seguro y cuenta protegida</h3>
            <p>
              Tu restaurante está protegido con autenticación segura. Solo tú o los usuarios
              autorizados pueden ingresar al panel y modificar la información. La seguridad y
              privacidad de tus datos es una prioridad.
            </p>
          </div>
        </div>
        <div className={styles.feature}>
          <div>
            <h3>Acceso sin necesidad de instalar apps</h3>
            <p>
              Tus clientes no tienen que descargar nada. Simplemente escanean el código QR con su
              cámara y acceden desde el navegador. Esto reduce la fricción, mejora la experiencia de
              usuario y aumenta el número de pedidos realizados por los comensales.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicasPage;
