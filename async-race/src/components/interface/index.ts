export interface Car {
  name: string;
  color: string;
  // brand: string
  id: number;
}

export interface CarData {
  totalCount: number;
  wins: number;
  cars: Car[];
}

export interface WinnerData {
  id: number;
  wins: number;
  time: number;
}