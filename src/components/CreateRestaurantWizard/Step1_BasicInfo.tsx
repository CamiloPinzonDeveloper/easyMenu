'use client';

import { useFormContext } from 'react-hook-form';

import FormInput from '../formInput/formInput';
import styles from './styles/Wizard.module.scss';

const Step1_BasicInfo = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.step}>
      <h2>Información Básica</h2>
      <FormInput
        label="Nombre del restaurante:"
        type="text"
        placeholder="Ingresa el nombre del restaurante"
        handleFormChange={() => {}}
        name="name"
        register={register}
        required
      />

      <FormInput
        label="Descripción:"
        type="textarea"
        placeholder="Ingresa una descripción del restaurante"
        handleFormChange={() => {}}
        name="description"
        register={register}
        required
      />
    </div>
  );
};

export default Step1_BasicInfo;
