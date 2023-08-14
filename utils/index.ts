import axios, { AxiosError, AxiosResponse } from 'axios';

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: { model: 'corolla' },
  headers: {
    'X-RapidAPI-Key': '26c6a7327fmsh182adc084d50c50p1894ecjsn5753efcc1416',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

const API_URL = options.url

const getCars = async () => {
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