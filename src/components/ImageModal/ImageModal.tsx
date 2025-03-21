import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ImUser } from 'react-icons/im';
import { ImageModalProps } from './ImageModal.types';

ReactModal.setAppElement('#root'); // ✅ Встановлюємо 1 раз перед рендерингом

const ImageModal = ({ onClose, isOpen, data }: ImageModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      closeTimeoutMS={0}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeBtn}>
          <IoCloseOutline className={css.iconClose} />
        </button>
        <img
          src={data?.urls?.regular}
          alt="Large image"
          className={css.image}
        />
        {data?.user?.bio ? (
          <div className={css.description}>
            <ImUser className={css.descriptionIcon} />
            <span className={`${css.descriptionText} ${css.descriptionSpan}`}>
              {data?.user?.first_name} {data?.user?.last_name}:
            </span>
            <p className={css.descriptionText}>{data?.user?.bio}</p>
          </div>
        ) : (
          <div className={css.description}>
            <ImUser className={css.descriptionIcon} />
            <span className={`${css.descriptionText} ${css.descriptionSpan}`}>
              {data?.user?.first_name}
            </span>
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
