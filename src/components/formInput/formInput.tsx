import { UseFormRegister } from 'react-hook-form';

import styles from './formInput.module.scss';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  register?: UseFormRegister<Record<string, unknown>>;
}

const FormInput = ({
  label,
  type,
  placeholder,
  handleFormChange,
  name,
  value,
  required,
  disabled,
  register,
}: FormInputProps) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={styles.input}
          value={value}
          required={required}
          disabled={disabled}
          {...(register ? register(name) : { name, onChange: handleFormChange })}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={
            (type === 'file' && styles.fileInput) || type === 'color'
              ? styles.colorInput
              : styles.input
          }
          value={value}
          required={required}
          disabled={disabled}
          {...(register ? register(name) : { name, onChange: handleFormChange })}
        />
      )}
    </div>
  );
};

export default FormInput;
