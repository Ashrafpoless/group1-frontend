// src/PostDetail.js

import {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';


import './PostDetails.css';

const postData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(postData);
  const [isEditing, setIsEditing] = useState(false);
  const [editPost, setEditPost] = useState({title:'', desc:''});
  
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleDelete = () => {
    const filteredPosts = posts.filter((p) => p.id !== post.id);
    setPosts(filteredPosts);
    navigate('/'); 
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditPost({ title: post.title, desc: post.desc });
  };

  const handleSave = () => {
    const updatedPosts = posts.map((p) => 
      p.id === post.id ? { ...p, title: editPost.title, desc: editPost.desc } : p
    );
    setPosts(updatedPosts);
    setIsEditing(false);
  };


  return (
    <div className="post-detail">
      {isEditing ? (
        <>
          <div className="content">           
            <input
              type="text"
              value={editPost.title}
              onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
              style={{ fontSize: '24px', marginBottom: '20px' }}
            />
            <textarea
              value={editPost.desc}
              onChange={(e) => setEditPost({ ...editPost, desc: e.target.value })}
              style={{ fontSize: '18px', width: '100%', height: '150px' }}
            />
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="img">
            <img src={post.img} alt={post.title} />
          </div>
          <div className="content">
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
