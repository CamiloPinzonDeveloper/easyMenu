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

export type RestaurantFormData = {
  name: string;
  description?: string;
  address?: string;
  logo?: FileList;
  color_primary?: string;
  color_secondary?: string;
  color_text?: string;
  color_price?: string;
  button_background?: string;
  button_text?: string;
};
