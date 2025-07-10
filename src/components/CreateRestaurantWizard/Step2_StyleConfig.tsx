'use client';

import { useFormContext } from 'react-hook-form';
import FormInput from '../formInput/formInput';

import styles from './styles/Wizard.module.scss';

const Step2_StyleConfig = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.step}>
      <h2>Estilos Visuales</h2>

      <FormInput
        label="Logo del Restaurante:"
        type="file"
        placeholder="Sube el logo del restaurante"
        handleFormChange={() => {}}
        name="logo"
        register={register}
      />

      <FormInput
        label="Color Primario del Restaurante:"
        type="color"
        placeholder="Selecciona el color primario"
        handleFormChange={() => {}}
        name="color_primary"
        register={register}
      />

      <FormInput
        label="Color Secundario del Restaurante:"
        type="color"
        placeholder="Selecciona el color secundario"
        handleFormChange={() => {}}
        name="color_secondary"
        register={register}
      />

      <FormInput
        label="Color del Texto:"
        type="color"
        placeholder="Selecciona el color del texto"
        handleFormChange={() => {}}
        name="color_text"
        register={register}
      />

      <FormInput
        label="Color del texto del Precio:"
        type="color"
        placeholder="Selecciona el color del precio"
        handleFormChange={() => {}}
        name="color_price"
        register={register}
      />

      <FormInput
        label="Color de Fondo del Botón Principal (CTA):"
        type="color"
        placeholder="Selecciona el color de fondo del botón"
        handleFormChange={() => {}}
        name="button_background"
        register={register}
      />

      <FormInput
        label="Color del Texto del Botón Principal (CTA):"
        type="color"
        placeholder="Selecciona el color del texto del botón"
        handleFormChange={() => {}}
        name="button_text"
        register={register}
      />
    </div>
  );
};

export default Step2_StyleConfig;
