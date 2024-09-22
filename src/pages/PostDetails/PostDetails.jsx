import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import getText from '../../utils/getText.js';
import Swal from 'sweetalert2';
import Menu from '../../components/Menu/Menu.jsx';
import { AuthContext } from '../../context/AuthContext';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState({});


    const { currentUser } = useContext(AuthContext);



    // share buttons
    const url = `localhost:5173${location.pathname}`;
    const title = 'Check out this website!';

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5050/api/posts/${id}`
                );
                setPost(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [id]);


    const handleDelete = async() => {
        Swal.fire({
            title:'Are You Sure',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: " Delete",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed){
                try {
                axios.delete(`http://localhost:5050/api/posts/${id}`, {
                withCredentials: true
            });
        } catch (err) {
            console.log(err);
        }
                Swal.fire('Deleted', "Your Blog Has Been Deleted", 'success');
                navigate('/');
            }else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Cancelled', 'Your File is Safe :)', 'error')
        }
        })
    };


    return (
        <div className="postDetail container">
            <div className="post_content">
                <img src={post?.postImg} alt="my car" />
                <div className="post_user">
                    {post.userImg && <img src={post.userImg} alt="" />}
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
                <h1>{post.title}</h1>
                {getText(post.content)}
                <p>views : {post.view}</p>
                {currentUser && <div>
                    <FacebookShareButton url={url} quote={title}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                        
                        <LinkedinShareButton url={url} title={title}>
                            <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton >
                        <TwitterShareButton url={url} quote={title}>
                            <TwitterIcon size={32} round={true}/>
                        </TwitterShareButton>
                        </div>}
            </div>
            <div className="menu">
                <Menu cat={post.cat} />
            </div> 
        </div>
    );
};

export default PostDetails;
