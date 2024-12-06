const API_URL = '/jsonFakeApi.json';

export const fetchProducts = async (p0: { signal: AbortSignal; }) => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return await response.json();
};
