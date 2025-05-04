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
}: FormInputProps) => {
  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleFormChange}
        name={name}
        className={styles.input}
        value={value}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default FormInput;
