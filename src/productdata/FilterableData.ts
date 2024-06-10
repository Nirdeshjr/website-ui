import axios from 'axios';

export const filterableData = async () => {
  try {
    // Make a GET request to your API endpoint
    const response = await axios.get('http://127.0.0.1:8000/api/product/');
    
    // Extract the data from the response
    const data = response.data;
    
    // Return the data
    return data;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
};
