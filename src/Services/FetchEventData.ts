import axios from 'axios';

// Define the interface for the data structure you expect to receive
interface EventData {
  id: number;
  title: string;
  launchDate: string; // You might need to adjust the type depending on the actual format
  imageFilenameThumb: string;
  // Add other properties as needed
}

// Function to fetch data
async function fetchData() {
  const EVENTS_API_URL = "https://amock.io/api/jonathonire/sony-events-2";
  try {
    const response = await axios.get<EventData[]>(EVENTS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default fetchData;