export interface IProfile {
  full_name: string;
  phone: string;
  address: string;
  avatar_url: string;
  restaurants: {
    id: string;
    name: string;
    created_at: string;
  }[];
}
