import { CarProps, FilterProps } from '@/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;
const imageApiKEy = process.env.NEXT_PUBLIC_IMAGIN_API_KEY

const API_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';

export const getCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": apiKey || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    console.log(apiKey, process.env.API_KEY, 'sending')
    const response: AxiosResponse = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers
      });

    console.log(response.data)
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', imageApiKEy || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
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