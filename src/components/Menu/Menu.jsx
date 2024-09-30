import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SERVER_URL from '../../server';

import './Menu.css'
const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(
                    SERVER_URL + `api/posts?cat=${cat}`
                );
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [cat]);

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="item" key={post.id}>
                    <img src={post.img} alt={post.title} />
                    <h2>{post.title.slice(0, 25)}...</h2>
                    
                        <Link className='menu-button' to={`/post/${post.id}`} >Read More</Link>{' '}
                    
                </div>
            ))}
        </div>
    );
};

Menu.propTypes = {
    cat: PropTypes.string.isRequired
};

export default Menu;
