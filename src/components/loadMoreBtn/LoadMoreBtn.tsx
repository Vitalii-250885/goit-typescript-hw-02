import { FC } from 'react';

import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  hendleLoadMore: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ hendleLoadMore }) => {
  return (
    <button type="submit" className={css.button} onClick={hendleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
