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

    const fullName = localStorage.getItem('fullName');

    const [posts, setPosts] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [image, setImage] = useState(null);

    const [postContent, setPostContent] = useState('');

    const [reactions, setReactions] = useState({});

    const [selectedPostId, setSelectedPostId] = useState(null);

    const [showQuickApplyModal, setShowQuickApplyModal] = useState(false);

    const [showCommentsModal, setShowCommentsModal] = useState(false);

    // Function to handle comments modal show/hide
    const handleShowCommentsModal = (postId) => {
        setSelectedPostId(postId);
        setShowCommentsModal(true);
    };
    const handleCloseCommentsModal = () => {
        setShowCommentsModal(false);
    };

    // Function to handle quick apply modal show/hide
    const handleShowQuickApplyModal = () => {
        setShowQuickApplyModal(true);
    };
    const handleCloseQuickApplyModal = () => {
        setShowQuickApplyModal(false);
    };

    //duration of animation of showing contents
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Retrieve posts and reactions from local storage
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        if (storedPosts) {
            setPosts(storedPosts);
            const storedReactions = JSON.parse(localStorage.getItem('reactions')) || {};
            setReactions(storedReactions);
        }
    }, []);

    // Function to handle text post submission
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

    // Function to handle image change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    // Function to handle image post submission
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

    // Function to handle reaction
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
                        <div className="actionItem videoUpload">
                            <OndemandVideoIcon fontSize='medium' />
                            <p>Video</p>
                        </div>
                        <div className="actionItem eventUpload">
                            <EventAvailableIcon fontSize='medium' />
                            <p>Event</p>
                        </div>
                        <div className="actionItem articleUpload">
                            <ArticleIcon fontSize='medium' />
                            <p>Write Article</p>
                        </div>
                    </div>
                </div>
                <div className="postList">
                    {/* Displaying post from ascending order */}
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
                                            <button onClick={() => handleReact(index, 'like')} className='like'>
                                                👍 {reactions[index]?.like ? <span className="reactionCount">({reactions[index].like})</span> : ''}
                                            </button>
                                            <button onClick={() => handleReact(index, 'heart')} className='heart'>
                                                💓 {reactions[index]?.heart ? <span className="reactionCount">({reactions[index].heart})</span> : ''}
                                            </button>
                                            <button onClick={() => handleReact(index, 'laugh')} className='laugh'>
                                                😂 {reactions[index]?.laugh ? <span className="reactionCount">({reactions[index].laugh})</span> : ''}
                                            </button>
                                            <button onClick={() => handleReact(index, 'wow')} className='wow'>
                                                😮 {reactions[index]?.wow ? <span className="reactionCount">({reactions[index].wow})</span> : ''}
                                            </button>
                                            <button onClick={() => handleReact(index, 'sad')} className='sad'>
                                                😞 {reactions[index]?.sad ? <span className="reactionCount">({reactions[index].sad})</span> : ''}
                                            </button>
                                            <button onClick={() => handleReact(index, 'angry')} className='angry'>
                                                😠 {reactions[index]?.angry ? <span className="reactionCount">({reactions[index].angry})</span> : ''}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='actionItem' onClick={() => handleShowCommentsModal(index)}>
                                        <CommentIcon fontSize='medium' />
                                        <p>Comment</p>
                                    </div>
                                    <div className="actionItem" onClick={handleShowQuickApplyModal} >
                                        <ApprovalIcon fontSize='medium' />
                                        <p>Quick Apply</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }).reverse()}
                </div>
            </div>
            {/* Modal for photo upload */}
            <UploadPhotoModal
                show={showModal}
                onHide={handleCloseModal}
                image={image}
                handleImageChange={handleImageChange}
                handleImagePostSubmit={handleImagePostSubmit}
            />
            {/* Modal for comments */}
            <CommentsModal show={showCommentsModal} onHide={handleCloseCommentsModal} postId={selectedPostId} />
            {/* Modal for quick apply */}
            <QuickApply show={showQuickApplyModal} onHide={handleCloseQuickApplyModal} />
        </div>
    );
}

export default ContentSection;
