import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RestaurantFormState {
  name: string;
  description: string;
  address: string;
  phone: string;
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  style: string;
  theme: string;
  font: string;
}

const initialState: RestaurantFormState = {
  name: '',
  description: '',
  address: '',
  phone: '',
  logo_url: '',
  primary_color: '#000000',
  secondary_color: '#ffffff',
  style: '',
  theme: '',
  font: '',
};

const restaurantFormSlice = createSlice({
  name: 'restaurantForm',
  initialState,
  reducers: {
    setRestaurantData: (state, action: PayloadAction<Partial<RestaurantFormState>>) => {
      return { ...state, ...action.payload };
    },
    resetRestaurantForm: () => initialState,
  },
});

export const { setRestaurantData, resetRestaurantForm } = restaurantFormSlice.actions;
export default restaurantFormSlice.reducer;
