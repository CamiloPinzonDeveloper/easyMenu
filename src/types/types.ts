export interface IProfile {
  display_name: string;
  email: string;
  phone?: string;
  address?: string;
  avatar_url?: string;
  restaurants?: {
    id: string;
    name: string;
    created_at: string;
  }[];
  id: string;
  created_at: string;
}

export interface IUserProfileState {
  profile: IProfile | null;
  loading: boolean;
  error: string | null;
}

export interface RestaurantFormData {
  business_name: string;
  description: string;
  logo_url?: string;
  subdomain: string;

  color_background: string;
  color_primary: string;
  color_secondary: string;
  color_price: string;
  color_button: string;
  color_button_text: string;

  font_family: string;
  font_size: 'small' | 'medium' | 'large';
  font_style: 'normal' | 'italic' | 'bold';

  menu_layout: 'list' | 'cards' | 'tabs';
  show_dish_images: boolean;
  show_allergen_icons: boolean;
  highlight_discounted: boolean;
}

export interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  value?: string | File;
  required?: boolean;
  disabled?: boolean;
}

export interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

export interface RestaurantFormVisibility {
  is_active: boolean;
  is_menu_public: boolean;
  show_prices: boolean;
  allow_orders: boolean;
}
