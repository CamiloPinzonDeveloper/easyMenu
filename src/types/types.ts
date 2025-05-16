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
