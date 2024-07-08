import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default function ImageModal({isModalOpen, closeModal, modalContent}) {
    return (
        <ReactModal
            isOpen={isModalOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
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
    )
}