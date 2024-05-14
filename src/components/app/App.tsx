import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchPhoto } from '../../api/photo-api.js';

import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import ImageGallery from '../imageGallery/ImageGallery.jsx';
import Loader from '../loader/Loader.jsx';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import ImageModal from '../imageModal/ImageModal.jsx';

import { Image } from '../../types.js';

import './App.css';

function App() {
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [regular, setRegular] = useState<string>('');
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handleUpdatePage = (query: string): void => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const load = async (query: string, page: number) => {
    try {
      setLoader(true);
      const data = await fetchPhoto(query, page);
      const results: Image[] = data.data.results;

      setShowBtn(data.data.total_pages && data.data.total_pages !== page);

      setImages([...images, ...results]);
      setErrorMessage(false);
      return;
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    load(query, page);
  }, [query, page]);

  const openModal = (regular: string): void => {
    setRegular(regular);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const hendleLoadMore = (): void => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <SearchBar handleUpdatePage={handleUpdatePage} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {showBtn && <LoadMoreBtn hendleLoadMore={hendleLoadMore} />}
      <div className="loader">{loader && <Loader />}</div>
      {errorMessage && <ErrorMessage />}
      <ImageModal regular={regular} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
