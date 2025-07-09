import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Step1_BasicInfo from './Step1_BasicInfo';
import Step2_StyleConfig from './Step2_StyleConfig';

import { RestaurantFormData } from '@/types/types';
import styles from './styles/Wizard.module.scss';

const CreateRestaurantWizard = () => {
  const [step, setStep] = useState(0);
  const methods = useForm<RestaurantFormData>({ mode: 'onTouched' });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: RestaurantFormData) => {
    console.log('Datos del restaurante:', data);
    // Send to supabase
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.wizard} onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 0 && <Step1_BasicInfo />}
        {step === 1 && <Step2_StyleConfig />}

        <div className={styles.navigation}>
          {step > 0 && (
            <button type="button" onClick={prevStep}>
              Atrás
            </button>
          )}
          {step < 1 && (
            <button type="button" onClick={nextStep}>
              Siguiente
            </button>
          )}
          {step === 1 && <button type="submit">Crear Restaurante</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateRestaurantWizard;
