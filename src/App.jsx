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
      setImages(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const topic = e.target.elements.search.value;
    if (topic.trim !== '') {
      getImages(topic);
    } else {
      alert('The search field can not be empty!');
    }
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong... Please try again</p>}
    </>
  );
}

export default App;
