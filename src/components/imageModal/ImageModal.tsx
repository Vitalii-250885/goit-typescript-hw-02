import { FC } from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';

import css from './ImageModal.module.css';

Modal.setAppElement('#root');

type ImageModalProps = {
  regular: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ regular, modalIsOpen, closeModal }) => {
  return (
    <>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} className={css.modal}>
        <div className={css.backdrop} onClick={closeModal}>
          <div className={css.modal}>
            <img src={regular} alt="" className={css.image} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageModal;
