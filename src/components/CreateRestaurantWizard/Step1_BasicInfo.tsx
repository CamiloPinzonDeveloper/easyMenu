'use client';

import { useFormContext } from 'react-hook-form';

import FormContainer from '../formContainer/formContainer';
import FormInput from '../formInput/formInput';

const Step1_BasicInfo = () => {
  const { register } = useFormContext();

  return (
    <>
      <h2>Información Básica</h2>
      <FormContainer>
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
      </FormContainer>
    </>
  );
};

export default Step1_BasicInfo;
