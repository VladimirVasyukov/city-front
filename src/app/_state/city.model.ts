export interface City {
  id: string;
  description: string;
  image: string;
  name: string;
  favorite: boolean;
}

export type CityForm = Omit<City, 'id' | 'favorite'>;
