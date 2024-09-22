import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import getText from '../../utils/getText';
import axios from 'axios';

import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;
    console.log(cat);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(null);
    const pageSize = 8;
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const paginatedPosts = posts.slice(firstIndex, lastIndex)
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5050/api/posts${cat}`
                );
                setPosts(res.data);
                setNumberOfPages(Math.ceil(res.data.length / pageSize));
            } catch (err) {
                console.log(err);
            }
        };

        fetchPosts();
    }, [cat]);


    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        } else {
            return;
        }
    };

    const nextPage = () => {
        if (currentPage !== 100) {
            setCurrentPage(currentPage + 1);
        } else {
            return;
        }
    };

    const changeCPage = (id) => {
        setCurrentPage(id);
    };
    

    return (
        <>
            <div className="home-posts">
                <div className="container posts">
                    {paginatedPosts.map((post) => (
                        <div className="one_post" key={post.id}>
                            <div className="one-post_img">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="one-post_content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{getText(post.content)}</p>
                                <button>
                                    <Link
                                        className="link"
                                        to={`/post/${post.id}`}
                                    >
                                        Read More
                                    </Link>{' '}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <Pagination className='pagination' size='lg'>
                        <Pagination.First onClick={()=>changeCPage(1)}/>
                        <Pagination.Prev on onClick={prePage} />
                        
                        {[...Array(numberOfPages).keys()].map((n, i) => (
                            <li key={i}>
                                <Pagination.Item  onClick={()=> changeCPage(i+1)}>{i + 1}</Pagination.Item>
                            </li>
                        ))}
                        
                        <Pagination.Next onClick={nextPage}/>
                        <Pagination.Last onClick={()=>changeCPage(numberOfPages)}/>
                    </Pagination>
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



export default Posts;

