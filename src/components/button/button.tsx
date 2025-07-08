import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>, token?: string) => void;
  kind: 'cta' | 'neutral' | 'error' | 'warning';
  buttonText: string;
  disabled?: boolean;
}

const Button = ({ type = 'button', handleClick, kind, buttonText, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.baseButton} ${styles[`${kind}`]}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
