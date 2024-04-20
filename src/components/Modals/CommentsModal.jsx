import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CommentsModal({ show, onHide, postId }) {
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        // Load comments for the selected post from local storage
        const storedComments = JSON.parse(localStorage.getItem('comments')) || {};
        setComments(storedComments[postId] || []);
    }, [postId]);

    const handleCommentSubmit = () => {
        if (commentContent.trim() !== '') {
            const newComment = {
                content: commentContent,
                fullName: localStorage.getItem('fullName'),
                date: new Date().toLocaleString()
            };
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem('comments', JSON.stringify({ ...JSON.parse(localStorage.getItem('comments')), [postId]: updatedComments }));
            setCommentContent('');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Comments</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='comments'>
                    {/* Render existing comments */}
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <p>{comment.fullName} - {comment.date}</p>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
                {/* Textarea for new comment */}
                <textarea
                    rows="4"
                    cols="55"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCommentSubmit}>
                    Comment
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CommentsModal;
