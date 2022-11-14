export interface City {
  id: number;
  image: string;
  name: string;
  description: string;
  favorite: boolean;
}

export type View = 'list' | 'grid' | 'edit';

export type CityForm = Omit<City, 'id' | 'favorite'>;
