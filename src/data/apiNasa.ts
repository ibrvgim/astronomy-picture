const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getNasaData(date: string) {
  try {
    const response = await fetch(`${URL}?api_key=${API_KEY}&date=${date}`);
    if (!response.ok) throw new Error('Could not fetch data. Try again!');

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
}

export async function getSpecificNasaData(startDate: string, endDate: string) {
  try {
    const response = await fetch(
      `${URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
    );
    if (!response.ok) throw new Error('Could not fetch data. Try again!');

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred.');
    }
  }
}
