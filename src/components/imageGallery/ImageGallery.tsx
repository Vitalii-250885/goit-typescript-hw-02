import { FC } from 'react';
import ImageCard from './imageCard/ImageCard';
import { Image } from '../../types.js';

import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  openModal: (regular: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, urls: { small, regular } }) => (
        <ImageCard key={id} small={small} regular={regular} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
