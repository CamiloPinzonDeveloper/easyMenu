import { RestaurantFormData } from '@/types/types';
import FormContainer from '@components/formContainer/formContainer';
import FormInput from '@components/formInput/formInput';
import FormSelect from '../formSelect/formSelect';

import styles from './styles/Wizard.module.scss';

interface Props {
  data: RestaurantFormData;
  setData: React.Dispatch<React.SetStateAction<RestaurantFormData>>;
  back: () => void;
}

const Step2_Styling = ({ data, setData, back }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Estilos del restaurante</h2>
      <FormContainer>
        <FormInput
          label="Color de fondo"
          handleFormChange={handleChange}
          type="color"
          name="color_background"
          value={data.color_background}
        />

        <FormInput
          label="Color Primario"
          handleFormChange={handleChange}
          type="color"
          name="color_primary"
          value={data.color_primary}
        />

        <FormInput
          label="Color secundario"
          handleFormChange={handleChange}
          type="color"
          name="color_secondary"
          value={data.color_secondary}
        />

        <FormInput
          label="Color del precio"
          handleFormChange={handleChange}
          type="color"
          name="color_price"
          value={data.color_price}
        />

        <FormInput
          label="Color botón"
          handleFormChange={handleChange}
          type="color"
          name="color_button"
          value={data.color_button}
        />

        <FormInput
          label="Color texto del botón"
          handleFormChange={handleChange}
          type="color"
          name="color_button_text"
          value={data.color_button_text}
        />

        <FormSelect
          label="Tipografía"
          name="font_family"
          value={data.font_family}
          options={[
            { label: 'Lexend', value: 'Lexend' },
            { label: 'Arial', value: 'Arial' },
            { label: 'Montserrat', value: 'Montserrat' },
            { label: 'Open Sans', value: 'Open Sans' },
          ]}
          handleChange={handleChange}
        />

        <div className={styles.actions}>
          <button onClick={back}>Atrás</button>
          <button>Crear Restaurante</button>
        </div>
      </FormContainer>
    </div>
  );
};

export default Step2_Styling;
