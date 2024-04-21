import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UploadPhotoModal({ show, onHide, image, handleImageChange, handleImagePostSubmit }) {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleImagePostSubmit();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}> {/* Add onSubmit event handler to the form */}
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}> {/* Call handleSubmit on button click */}
                    Upload
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UploadPhotoModal;
