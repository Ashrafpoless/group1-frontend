import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SERVER_URL from '../../server';

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
                <div className="post" key={post.id}>
                    <img src={post.img} alt={post.title} />
                    <h2>{post.title}</h2>
                    <button>
                        {' '}
                        <Link to={`/post/${post.id}`}>Read More</Link>{' '}
                    </button>
                </div>
            ))}
        </div>
    );
};

Menu.propTypes = {
    cat: PropTypes.string.isRequired
};

export default Menu;
