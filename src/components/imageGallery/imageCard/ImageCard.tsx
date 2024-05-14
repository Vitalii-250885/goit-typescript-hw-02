import { FC } from 'react';

import css from './ImageCard.module.css';

type ImageCardProps = {
  small: string;
  regular: string;
  openModal: (regular: string) => void;
};

const ImageCard: FC<ImageCardProps> = ({ small, regular, openModal }) => {
  return (
    <li className={css.card}>
      <img
        src={small}
        alt=""
        className={css.image}
        onClick={(): void => {
          openModal(regular);
        }}
      />
    </li>
  );
};

export default ImageCard;
