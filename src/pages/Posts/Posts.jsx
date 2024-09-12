// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

import './Posts.css';

const Posts = () => {
    // const [posts, setPosts] = useState([]);
    // const cat = useLocation().search

    // useEffect(()=>{
    //     const fetchPosts = async()=>{
    //         try {
    //             const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
    //             setPosts(res.data)
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchPosts();
    // },[cat])

    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
            img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ];
    return (
        <>
            <div className="home-posts">
                <div className="container posts">
                    {posts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button><Link className="link" to={`/post/${post.id}`}>Read More
                                </Link> </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <section className='first-section'>
        <div className="container first">
            <h1>Unleashing Innovation: Your Daily Dose of Writing</h1>
            <p>Welcome to your ultimate destination for tech insights, where innovation meets creativity!</p>
        </div>

    </section>
     <section className='second-section'>
        <div className="container second">
            <h1>Unleashing Innovation: Your Daily Dose of Writing</h1>
            <p>Welcome to your ultimate destination for tech insights, where innovation meets creativity!</p>
        </div>
    </section> */}
        </>
    );
};

Posts.propTypes = {};

export default Posts;
