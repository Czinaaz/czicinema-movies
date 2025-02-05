import Modal from 'react-modal';
import styles from './TrailerModal.module.css';

Modal.setAppElement('#root'); // Zapobiega problemom z dostępnością

const TrailerModal = ({ isOpen, onClose, trailerKey }) => {
  if (!trailerKey) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeBtn}>X</button>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

export default TrailerModal;
