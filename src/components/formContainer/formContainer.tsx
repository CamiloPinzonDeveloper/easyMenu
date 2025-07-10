import styles from './formContainer.module.scss';

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.formContainer}>{children}</div>;
};

export default FormContainer;
