import React, { useState, useEffect } from 'react';
import './ContentSection.css';
import Photo from '../../assets/images/img.jpg'
import UploadPhotoModal from '../Modals/UploadPhotoModal';
import CommentsModal from '../Modals/CommentsModal';
import QuickApply from '../Modals/QuickApply';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CreateIcon from '@mui/icons-material/Create';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ApprovalIcon from '@mui/icons-material/Approval';
import { Link } from 'react-router-dom';

function ContentSection() {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [reactions, setReactions] = useState({});
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [showQuickApplyModal, setShowQuickApplyModal] = useState(false);
    // Retrieve full name from local storage
    const fullName = localStorage.getItem('fullName');

    const [showCommentsModal, setShowCommentsModal] = useState(false);

    const handleShowCommentsModal = (postId) => {
        setSelectedPostId(postId);
        setShowCommentsModal(true);
    };

    const handleCloseCommentsModal = () => {
        setShowCommentsModal(false);
    };

    const handleShowQuickApplyModal = () => {
        setShowQuickApplyModal(true);
    };

    const handleCloseQuickApplyModal = () => {
        setShowQuickApplyModal(false);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        if (storedPosts) {
            setPosts(storedPosts);
            const storedReactions = JSON.parse(localStorage.getItem('reactions')) || {};
            setReactions(storedReactions);
        }
    }, []);

    const handleImagePostSubmit = () => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;
                const newPost = { content: postContent, time: new Date(), image: imageData };
                const updatedPosts = [...posts, newPost];
                setPosts(updatedPosts);
                const updatedReactions = { ...reactions, [updatedPosts.length - 1]: {} };
                setReactions(updatedReactions);
                localStorage.setItem('posts', JSON.stringify(updatedPosts));
                localStorage.setItem('reactions', JSON.stringify(updatedReactions));
                setImage(null);
                setPostContent('');
                setShowModal(false);
            };
            reader.readAsDataURL(image);
        }
    };

    const handleTextPostSubmit = (e) => {
        e.preventDefault();
        if (postContent.trim() !== '') {
            const newPost = { content: postContent, time: new Date(), image: null };
            const updatedPosts = [...posts, newPost];
            setPosts(updatedPosts);
            const updatedReactions = { ...reactions, [updatedPosts.length - 1]: {} };
            setReactions(updatedReactions);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            localStorage.setItem('reactions', JSON.stringify(updatedReactions));
            setPostContent('');
        }
    };


    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleReact = (postIndex, reaction) => {
        const updatedReactions = { ...reactions };
        if (!updatedReactions[postIndex][reaction]) {
            updatedReactions[postIndex][reaction] = 1;
        } else {
            updatedReactions[postIndex][reaction]++;
        }
        setReactions(updatedReactions);
        localStorage.setItem('reactions', JSON.stringify(updatedReactions));
    };

    return (
        <div className='contentContainer'>
            <div className='wrapper'>
                <div className="container">
                    <form className='postForm' onSubmit={handleTextPostSubmit}>
                        <CreateIcon fontSize='large' className='createIcon' />
                        <input type="text" placeholder="Start a post..." value={postContent} onChange={(e) => setPostContent(e.target.value)} />
                        <button type='submit'>post</button>
                    </form>
                    <div className="actions">
                        <div className="actionItem">
                            <button onClick={handleShowModal}><PermMediaIcon fontSize='medium' /></button>
                            <p>Photo</p>
                        </div>
                        <div className="actionItem">
                            <OndemandVideoIcon fontSize='medium' />
                            <p>Video</p>
                        </div>
                        <div className="actionItem">
                            <EventAvailableIcon fontSize='medium' />
                            <p>Event</p>
                        </div>
                        <div className="actionItem">
                            <ArticleIcon fontSize='medium' />
                            <p>Write Article</p>
                        </div>
                    </div>
                </div>
                <div className="postList">
                    {posts.map((post, index) => {
                        if (!reactions[index]) {
                            setReactions(prevReactions => ({ ...prevReactions, [index]: {} }));
                        }

                        return (
                            <div key={index} className="postContainer" data-aos='zoom-in'>
                                <div className="postHeader">
                                    <Link to='/profile' className='save'>
                                        <img src={Photo} alt="profileImg" className='profileImg' />
                                    </Link>
                                    <div className="profileInfo">
                                        <Link to='/profile' className='save'>
                                            <h6 className='posterName'>{fullName}</h6>
                                        </Link>
                                        <p className='postTime'>Posted: {post.time && post.time.toLocaleString()}</p>
                                    </div>

                                </div>
                                <div className="postDescription">
                                    <p className='post'>{post.content}</p>
                                    {post.image && <img src={post.image} alt="Post Image" className='postedImage' />}
                                </div>
                                <div className="actions">
                                    <div className="actionItem">
                                        <div className='thumb'>
                                            <ThumbUpIcon fontSize='medium' />
                                            <p>Like</p>
                                        </div>
                                        <div className="reactions">
                                            <button onClick={() => handleReact(index, 'like')} className='like'>👍 {reactions[index]?.like ? `(${reactions[index].like})` : ''}</button>
                                            <button onClick={() => handleReact(index, 'heart')} className='heart'>💓 {reactions[index]?.heart ? `(${reactions[index].heart})` : ''}</button>
                                            <button onClick={() => handleReact(index, 'laugh')} className='laugh'>😂 {reactions[index]?.laugh ? `(${reactions[index].laugh})` : ''}</button>
                                            <button onClick={() => handleReact(index, 'wow')} className='wow'>😮 {reactions[index]?.wow ? `(${reactions[index].wow})` : ''}</button>
                                            <button onClick={() => handleReact(index, 'sad')} className='sad'>😞 {reactions[index]?.sad ? `(${reactions[index].sad})` : ''}</button>
                                            <button onClick={() => handleReact(index, 'angry')} className='angry'>😠 {reactions[index]?.angry ? `(${reactions[index].angry})` : ''}</button>
                                        </div>
                                    </div>
                                    <div className='actionItem'>
                                        <CommentIcon fontSize='medium' onClick={() => handleShowCommentsModal(index)} />
                                        <p>Comment</p>
                                    </div>
                                    <div className="actionItem" >
                                        <ApprovalIcon fontSize='medium' onClick={handleShowQuickApplyModal} />
                                        <p>Quick Apply</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }).reverse()}
                </div>
            </div>
            <UploadPhotoModal
                show={showModal}
                onHide={handleCloseModal}
                image={image}
                handleImageChange={handleImageChange}
                handleImagePostSubmit={handleImagePostSubmit}
            />
            <CommentsModal show={showCommentsModal} onHide={handleCloseCommentsModal} postId={selectedPostId} />
            <QuickApply show={showQuickApplyModal} onHide={handleCloseQuickApplyModal} />
        </div>
    );
}

export default ContentSection;
