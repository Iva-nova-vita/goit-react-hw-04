import SearchBar from './assets/components/SearchBar/SearchBar';
import './App.css';

import { useState } from 'react';
import fetchData from './assets/utilities/fetchData';
import ImageGallery from './assets/components/ImageGallery/ImageGallery';
import { Grid } from 'react-loader-spinner';
import ErrorMessage from './assets/components/ErrorMessage/ErrorMessage'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getImages(topic) {
    try {
      setError(false);
      setLoading(true);
      const response = await fetchData(topic);
      console.log(response);
      setImages(response.results);
    } catch (error) {
      console.log(error, 'error');
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSubmit={getImages}></SearchBar>
      <ImageGallery images={images}></ImageGallery>
      {loading && (
        <Grid
          visible={true}
          height='80'
          width='80'
          color='#2b2b94'
          ariaLabel='grid-loading'
          radius='12.5'
          wrapperStyle={{}}
          wrapperClass='grid-wrapper'
        />
      )}
      {error && <ErrorMessage/>}
    </>
  );
}

export default App;
