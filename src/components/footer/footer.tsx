import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContent}`}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Easy Menu. All rights reserved.
        </p>
        <p className={styles.socialLinks}>
          Follow us on{' '}
          <a href="https://twitter.com/yourcompany" className="text-blue-400">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://www.facebook.com/yourcompany" className="text-blue-400">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
