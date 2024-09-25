/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: string | undefined;
  name: string;
  price: number;
  description: string;
  category?: string[];
  image?: string;
  stock?: number;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategories: string[];
  sortOption: "asc" | "desc";
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
export interface IService {
  services: IService[];
  _id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface ServiceState {
  services: IService[];
  serviceDetails: IService | null;
  loading: boolean;
  error: string | null;
}

export interface ServiceTableProps {
  services: any[] | undefined;
  isLoading: boolean;
  error: string | null;
  onEditService: (service: any) => void;
}
export interface Booking {
  id: string;
  serviceName: string;
  timeSlot: string;
}
export interface BookingState {
  serviceId: string | null;
  slotId: string | null;
  vehicleDetails: {
    type: string;
    brand: string;
    model: string;
    year: number;
    plate: string;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  bookings: Booking[];
}

// Define the user profile interface
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Define the complete user state
export interface UserState {
  profile: UserProfile | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  token: string | null;
}
