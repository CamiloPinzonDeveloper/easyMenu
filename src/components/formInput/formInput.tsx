import { FormInputProps } from '@/types/types';
import styles from './formInput.module.scss';

const FormInput = ({
  label,
  type,
  placeholder,
  handleFormChange,
  name,
  value,
  required,
  disabled,
}: FormInputProps) => {
  const isFileInput = type === 'file';
  const isColorInput = type === 'color';
  const isTextarea = type === 'textarea';

  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className={styles.input}
          value={typeof value === 'string' ? value : ''}
          required={required}
          disabled={disabled}
          onChange={handleFormChange}
          name={name}
        />
      ) : (
        <input
          type={type}
          placeholder={!isFileInput ? placeholder : ''}
          className={
            isFileInput ? styles.fileInput : isColorInput ? styles.colorInput : styles.input
          }
          name={name}
          onChange={handleFormChange}
          required={required}
          disabled={disabled}
          accept={isFileInput ? 'image/*' : undefined}
          {...(!isFileInput && { value: typeof value === 'string' ? value : '' })}
        />
      )}
    </div>
  );
};

export default FormInput;
