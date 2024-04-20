import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function QuickApply({ show, onHide }) {
    const fileInputRef = useRef(null);

    const handleApply = () => {
        const file = fileInputRef.current.files[0];
        if (file && file.type === 'application/pdf') {
            alert('Applied successfully');
            onHide();
        } else {
            alert('Please upload a PDF file.');
        }
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Quick Apply</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Quick Apply is a feature that allows you to apply for jobs without having to fill out a form. Simply
                        click the button below to apply for a job.
                    </p>
                    <label htmlFor="file">Upload your CV/Resume as pdf file only.</label>
                    <input ref={fileInputRef} type="file" accept="application/pdf" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleApply}>Apply</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default QuickApply;
