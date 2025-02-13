export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_LIBRARIES = import.meta.env.VITE_GOOGLE_MAPS_LIBRARIES
  ? import.meta.env.VITE_GOOGLE_MAPS_LIBRARIES.split(',')
  : [];
export const API_URL = import.meta.env.VITE_API_URL;
