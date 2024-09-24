// import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import './Userprofile.css';

const Userprofile = () => {
    const [user, setUser] = useState([])
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [file, setFile] = useState(null);
    const { currentUser } = useContext(AuthContext);



    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5050/api/users/user/${currentUser.id}`
                );
                setUser(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [currentUser.id, file]);

    
    const upload = async () => {
        if (!file) return '';
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post(
                'http://localhost:5050/api/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            return res.data.url; // Cloudinary URL from the backend
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        try {
            await axios.put(
                `http://localhost:5050/api/users/${currentUser.id}`,
                {
                    currentPassword,
                    newPassword,
                    confirmNewPassword,
                    img: imgUrl
                }
            );
            setFile(null);
            setCurrentPassword('');
            setConfirmNewPassword('');
            setNewPassword('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="profile">
            <div className=" profile_container">
                <Link to={`/myposts/${currentUser.id}`} className="btn_mine">
                    {' '}
                    My Posts
                </Link>
                <Link
                    to={`/myfavorites/${currentUser.id}`}
                    className="btn_mine"
                >
                    {' '}
                    My Favorites
                </Link>
                <div className="profile_details">
                    <div className="avatar_wrapper">
                        <div className="profile_avatar">
                            <img
                                src={user.img}
                                alt={user.username}
                            />
                        </div>
                        <form className="avatar_form">
                            <input
                                type="file"
                                name="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                accept="png, jpg, jpeg"
                            />
                            <label htmlFor="file">
                                {' '}
                                <FaEdit />{' '}
                            </label>
                            <button
                                className="profile-avatar_btn"
                                onClick={handleClick}
                            >
                                <FaCheck />
                            </button>
                        </form>
                    </div>
                    <h1>{currentUser.username}</h1>
                    <form className="form profile_form">
                        <p className="form_error-message">
                            This is an Error message
                        </p>
                        <h3>Change The Password</h3>
                        <input
                            type="password"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmNewPassword}
                            onChange={(e) =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                            <button className="profile_btn" onClick={handleClick}>
                                Update Password
                            </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

Userprofile.propTypes = {};

export default Userprofile;
