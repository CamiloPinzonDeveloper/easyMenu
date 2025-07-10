'use client';

import { useState } from 'react';
import Step1_BasicInfo from './Step1_BasicInfo';
import Step2_Styling from './Step2_Styling';
import { RestaurantFormData } from '@/types/types';

const CreateRestaurantWizard = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<RestaurantFormData>({
    business_name: '',
    description: '',
    logo_url: '',
    subdomain: '',

    color_background: '#ffffff',
    color_primary: '#000000',
    color_secondary: '#777777',
    color_price: '#ff0000',
    color_button: '#000000',
    color_button_text: '#ffffff',

    font_family: 'Lexend',
    font_size: 'medium',
    font_style: 'normal',

    menu_layout: 'list',
    show_dish_images: true,
    show_allergen_icons: false,
    highlight_discounted: false,
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div>
      {step === 1 && <Step1_BasicInfo data={formData} setData={setFormData} next={nextStep} />}
      {step === 2 && <Step2_Styling data={formData} setData={setFormData} back={prevStep} />}
    </div>
  );
};

export default CreateRestaurantWizard;
