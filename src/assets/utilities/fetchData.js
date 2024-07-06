import axios from 'axios';

const URL = 'https://api.unsplash.com/search/photos'
const API_KEY = 'JAcvmRB72np9Zb0uw-aN8WLGkxNdyXyW6XRPL8pzTfw';

export default async function fetchData(topic, page=1) {
  const response = await axios.get(URL, {
    params: {
      client_id: API_KEY,
      query: topic,
      page
    },
  });
  return response.data
}
