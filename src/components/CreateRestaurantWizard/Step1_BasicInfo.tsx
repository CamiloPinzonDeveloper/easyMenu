import { RestaurantFormData } from '@/types/types';
import FormContainer from '@components/formContainer/formContainer';
import FormInput from '@/components/formInput/formInput';

interface Props {
  data: RestaurantFormData;
  setData: React.Dispatch<React.SetStateAction<RestaurantFormData>>;
  next: () => void;
}

const Step1_BasicInfo = ({ data, setData, next }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target instanceof HTMLInputElement && e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setData((prev) => ({ ...prev, logoFile: file, logoPreviewUrl: url }));
      }
    }
  };

  return (
    <div>
      <h2>Información básica</h2>
      <FormContainer>
        <FormInput
          label="Nombre del restaurante"
          name="business_name"
          type="text"
          placeholder="Ej: Pizza Roma"
          value={data.business_name}
          handleFormChange={handleChange}
          required
        />
        <FormInput
          label="Descripción"
          name="description"
          type="textarea"
          placeholder="Pizzas italianas auténticas"
          value={data.description}
          handleFormChange={handleChange}
        />
        <FormInput
          label="Subdominio"
          name="subdomain"
          type="text"
          placeholder="Ej: pizzaroma"
          value={data.subdomain}
          handleFormChange={handleChange}
          required
        />
        <FormInput
          label="Logo del Restaurante:"
          type="file"
          name="logo"
          placeholder="Sube el logo del restaurante"
          required
          handleFormChange={handleFileChange}
        />
        <button onClick={next}>Siguiente</button>
      </FormContainer>
    </div>
  );
};

export default Step1_BasicInfo;
