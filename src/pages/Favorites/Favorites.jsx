import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Pagination } from 'react-bootstrap';
import SERVER_URL from '../../server.js';


import './favorites.css'

const Favorites = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(null);
    const pageSize = 10;
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const paginatedPosts = myPosts.slice(firstIndex, lastIndex)


    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const res = await axios.get(
                    SERVER_URL + `api/users/myfavorites/${currentUser.id}`
                );
                setMyPosts(res.data.reverse());
                setNumberOfPages(Math.ceil(res.data.length / pageSize));
            } catch (err) {
                console.log(err);
            }
        };

        fetchMyPosts();
    }, [currentUser.id]);



    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are You Sure',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://localhost:5050/api/users/myfavorites/${id}`, {
                        withCredentials: true
                    });
                } catch (err) {
                    Swal.fire({
                        icon: "warning",
                        text: `${err.response.data.message}`,
                    });
                }
                Swal.fire('Deleted', 'Your Post Has Been Deleted', 'success');
                navigate(`/profile/${currentUser.id}`);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your post is Safe :)', 'error');
            }
        });
    };

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        } else {
            return;
        }
    };

    const nextPage = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        } else {
            return;
        }
    };

    const changeCPage = (id) => {
        setCurrentPage(id);
    };
    

  return (
    <section className="dashboard">
        <h2 className='favorites_title'>My Favorites</h2>
    {myPosts.length ? (
        <div className="favorites_container">
            {paginatedPosts.map((post) => {
                return (
                    <article key={post.id} className="favorites_post">
                        <div className="post_info">
                            <div className="favorites_img">
                                <img src={post.img} alt="" />
                            </div>
                            <h5>{post.title}</h5>
                        </div>
                        <div className="post_actions">
                            <Link
                                to={`/post/${post.id}`}
                                className="btn_view"
                            >
                                View
                            </Link>
                            <button
                                type='submit'
                                onClick={()=>handleDelete(post.id)}
                                className="btn_delete"
                            >
                                Delete
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    ) : (
        <h2 className="favorites_center"> You Have No Favorites Yet</h2>
    )}
    <div>{myPosts.length > 10 ? 
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
        : null
        }
        </div>
</section>
);
}

export default Favorites