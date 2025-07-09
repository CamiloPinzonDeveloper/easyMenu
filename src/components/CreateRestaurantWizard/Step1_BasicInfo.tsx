'use client';

import { useFormContext } from 'react-hook-form';
import styles from './styles/Wizard.module.scss';

const Step1_BasicInfo = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.step}>
      <h2>Información Básica</h2>
      <label>Nombre del restaurante:</label>
      <input {...register('name', { required: true })} />

      <label>Descripción:</label>
      <textarea {...register('description')} />
    </div>
  );
};

export default Step1_BasicInfo;
