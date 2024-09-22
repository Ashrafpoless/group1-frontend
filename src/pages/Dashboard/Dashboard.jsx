import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5050/api/users/${currentUser.id}`
                );
                setMyPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMyPosts();
    }, [currentUser.id]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/api/posts/${id}`, {
                withCredentials: true
            });
            navigate('#');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="dashboard">
            {myPosts.length ? (
                <div className="dashboard_container">
                    {myPosts.map((post) => {
                        return (
                            <article key={post.id} className="dashboard_post">
                                <div className="post_info">
                                    <div className="dashboard_img">
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
                                    <Link
                                        to={`/write?edit=${post.id}`}
                                        state={post}
                                        className="btn_edit"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        onChange={handleDelete}
                                        className="btn_delete"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <h2 className="dashboard_center"> You have no posts yet</h2>
            )}
        </section>
    );
};

Dashboard.propTypes = {};

export default Dashboard;
