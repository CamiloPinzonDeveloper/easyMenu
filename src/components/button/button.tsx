import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>, token?: string) => void;
  kind: 'cta' | 'neutral' | 'error' | 'warning';
  buttonText: string;
}

const Button = ({ type = 'button', handleClick, kind, buttonText }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.baseButton} ${styles[`${kind}`]}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
