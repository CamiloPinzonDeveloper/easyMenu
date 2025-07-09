'use client';

import { useFormContext } from 'react-hook-form';
import styles from './styles/Wizard.module.scss';

const Step2_StyleConfig = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.step}>
      <h2>Estilos Visuales</h2>

      <label>Logo:</label>
      <input type="file" {...register('logo')} />

      <label>Color Primario:</label>
      <input type="color" {...register('color_primary')} />

      <label>Color Secundario:</label>
      <input type="color" {...register('color_secondary')} />

      <label>Color del Texto:</label>
      <input type="color" {...register('color_text')} />

      <label>Color del Precio:</label>
      <input type="color" {...register('color_price')} />

      <label>Botón - Fondo:</label>
      <input type="color" {...register('button_background')} />

      <label>Botón - Texto:</label>
      <input type="color" {...register('button_text')} />
    </div>
  );
};

export default Step2_StyleConfig;
