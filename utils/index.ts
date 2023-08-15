import axios, { AxiosError, AxiosResponse } from 'axios';

const API_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';

export const getCars = async () => {
  try {
    const response: AxiosResponse = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        return axiosError.response.data;
      } else if (axiosError.request) {
        throw new Error('Request was made, but no response received');
      } else {
        throw new Error('Error setting up the request');
      }
    } else {
      throw new Error(`Non-Axios error occurred: ${error}`);
    }
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const rentalBasePrice = 60;
  const mileageFactor = 0.2;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = rentalBasePrice + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}