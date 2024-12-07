const API_URL = '/jsonFakeApi.json';
const ENDPOINT_MAIN_PRODUCTS = '/fakeMainProducts.json'

import { Product } from "../types";

export const fetchProducts = async (p0?: { signal: AbortSignal; }) => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return await response.json();
};

export const getMainProducts = async () : Promise<Product[]> => {
  const response = await fetch(ENDPOINT_MAIN_PRODUCTS);
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return await response.json();
};
