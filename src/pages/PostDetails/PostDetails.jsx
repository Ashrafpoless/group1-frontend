import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import getText from '../../utils/getText.js';
import Swal from 'sweetalert2';
import Menu from '../../components/Menu/Menu.jsx';
import { AuthContext } from '../../context/AuthContext';

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,

} from 'react-share';

import './PostDetails.css';
import SERVER_URL from '../../server.js';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState({});

    const { currentUser } = useContext(AuthContext);

    // share buttons
    const url = `https://group1-frontend-six.vercel.app${location.pathname}`;
    const title = 'Check out this website!';

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(
                      `https://group1-backend-ten.vercel.app/api/posts/${id}`
                );
                setPost(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [id]);


    const handleDelete = async () => {
        try {
        Swal.fire({
            title: 'Are You Sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // try {
                    axios.delete(SERVER_URL + `api/posts/${id}`, {
                        withCredentials: true
                    });
                // } catch (err) {
                    // console.log(err);
                // }
                Swal.fire('Deleted', 'Your Post Has Been Deleted', 'success');
                navigate('/');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your post is Safe :)', 'error');
            }
        });
    } catch (err) {
        console.log(err);
    }

    };

    const handleSave = async()=>{
        try {
            await axios.post(SERVER_URL + `api/users/myfavorites`, {
                pid: id,
                uid: currentUser.id
            });
            Swal.fire({
                title: "Saved",
                icon: "success"
            });
        } catch (err) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: `${err.response.data.message}`,
            });
        }
    };

    return (
        <div className="postDetail container">
            <div className="post_content">
                <img src={post?.postImg} alt={post?.postImg} />
                <div className='user_save'>
                    <div className="post_user"> {post.userImg && <img src={post.userImg} alt={post.username} />}
                        <div className="info">
                            <span>{post.username}</span>
                            <p>Posted {moment(post.date).fromNow()}</p>
                        </div>
                    {currentUser && currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/create?edit=${id}`} state={post}>
                                <img src="../../img/edit.png" alt="Edit" />
                            </Link>

                            <img
                                onClick={handleDelete}
                                src="../../img/delete.png"
                                alt="Delete"
                            />
                        </div>
                    )}
                    </div>
                    {currentUser && <button className='save-button' onClick={handleSave}>Add to Favourites</button>}
                </div>
                <h1>{post.title}</h1>
                {getText(post.content)}
                <p>views : {post.view}</p>
                {currentUser && (
                    <div className='share'>
                        <h4>{post.cat}</h4>
                        <div>
                            <WhatsappShareButton url={url} quote={title}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton url={url} quote={title}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <LinkedinShareButton url={url} title={title}>
                            <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                        <FacebookShareButton url={url} quote={title}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        </div>
                        
                        
                    </div>
                )}
            </div>

            <div className="menu">
                {post.cat && <Menu cat={post.cat} />} 
            </div>
        </div>
    );
};

export default PostDetails;
