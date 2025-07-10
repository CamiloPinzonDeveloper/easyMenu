import { FormSelectProps } from '@/types/types';

import styles from './formSelect.module.scss';

const FormSelect = ({
  label,
  name,
  value,
  options,
  handleChange,
  required,
  disabled,
}: FormSelectProps) => {
  return (
    <div className={styles.formSelect}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={styles.select}
        value={value}
        onChange={handleChange}
        required={required}
        disabled={disabled}
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
