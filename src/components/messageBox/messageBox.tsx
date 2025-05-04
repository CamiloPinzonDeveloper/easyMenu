import styles from './messageBox.module.scss';

interface MessageBoxProps {
  errorMessage?: string;
  successMessage?: string;
}

const MessageBox = ({ errorMessage, successMessage }: MessageBoxProps) => {
  return (
    <div className={styles.messageBox}>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </div>
  );
};

export default MessageBox;
