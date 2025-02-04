import { Offer } from "../types/Offer";

import { Cities } from "../const";

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const fetchOffersForCity = async (city: Cities): Promise<Offer[]> => {
    const response = await fetch(`${BACKEND_URL}/api/offers?city=${city}`);
  
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching offers:', errorText);
      throw new Error('Failed to fetch offers for the selected city');
    }
  
    return await response.json();
  };
  