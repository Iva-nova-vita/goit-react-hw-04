import './App.css';

import { useState } from 'react';
import { Grid } from 'react-loader-spinner';
import ReactModal from 'react-modal';

import fetchData from './utilities/fetchData';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  async function getImages(searchQuery, page) {
    try {
      setError(false);
      setLoading(true);
      setNoData(false);
      setLoadMoreBtn(false);
      setSearchQuery(searchQuery);
      setPage(page);
      if (page === 1) {
        setImages([]);
      }

      const response = await fetchData(searchQuery, page);

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

  function openModal(image) {
    setIsModalOpen(true);
    setModalContent(image);
  }

  ReactModal.setAppElement('#root');

  return (
    <>
      <SearchBar getImages={getImages}></SearchBar>

      <section className='mainContent'>
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal}></ImageGallery>
        )}
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
        {isModalOpen && (
          <ReactModal
            isOpen={isModalOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: '#20201fba',
              },
            }}
          >
            <img
              src={modalContent.urls.regular}
              alt={modalContent.alt_description}
            />
          </ReactModal>
        )}
      </section>
    </>
  );
}

export default App;
