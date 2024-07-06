import './App.css';

import { useState } from 'react';
import { Grid } from 'react-loader-spinner';

import fetchData from './assets/utilities/fetchData';
import SearchBar from './assets/components/SearchBar/SearchBar';
import ImageGallery from './assets/components/ImageGallery/ImageGallery';
import ErrorMessage from './assets/components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './assets/components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);

  async function getImages(searchQuery, page) {
    try {
      setError(false);
      setLoading(true);
      setNoData(false);
      setSearchQuery(searchQuery);
      setPage(page);
      const response = await fetchData(searchQuery, page);
      console.log(response);
      page > 1
        ? setImages([...images, ...response.results])
        : setImages([...response.results]);
      response.total_pages > page
        ? setLoadMoreBtn(true)
        : setLoadMoreBtn(false);
      response.total > 0 ? setNoData(false) : setNoData(true);
    } catch (error) {
      console.log(error, 'error');
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar getImages={getImages}></SearchBar>
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
      {loading && (
        <Grid
          visible={true}
          height='80'
          width='80'
          color='#2b2b94'
          ariaLabel='grid-loading'
          radius='12.5'
          wrapperClass='grid-wrapper'
        />
      )}
      {error && <ErrorMessage />}
      {noData && <p>No data on your request</p>}
      {loadMoreBtn && (
        <LoadMoreBtn
          getImages={getImages}
          searchQuery={searchQuery}
          page={page + 1}
        ></LoadMoreBtn>
      )}
    </>
  );
}

export default App;
