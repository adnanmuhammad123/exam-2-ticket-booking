import axios from 'axios';

// Replace with your actual API URL or mock JSON URL
const API_URL = 'https://mocki.io/v1/7dfb20a3-0185-4467-8f78-a620295255bb';

export const getFlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // axios puts the data here
  } catch (error) {
    console.error("Error fetching flights:", error);
    return []; // return empty array on error
  }
};
