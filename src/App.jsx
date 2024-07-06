import SearchBar from './assets/components/SearchBar/SearchBar';
import './App.css';

import { useState } from 'react';
import fetchData from './assets/utilities/fetchData';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getImages(topic) {
    try {
      setError(false);
      setLoading(true);
      const response = await fetchData(topic)
      console.log(response)
      setImages(response);
    } catch (error) {
      console.log(error, 'error')
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSubmit={getImages}></SearchBar>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong... Please try again</p>}
    </>
  );
}

export default App;
