// import PropTypes from 'prop-types'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

import './Userprofile.css';

const Userprofile = () => {
    const [avatar, setAvatar] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewpassword] = useState('');
    const [confirmNewPassword, setConfirmNewpassword] = useState('');
    const { currentUser } = useContext(AuthContext);

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
                            <img src={avatar} alt="" />
                        </div>
                        <form className="avatar_form">
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                onChange={(e) => setAvatar(e.target.files[0])}
                                accept="png, jpg, jpeg"
                            />
                            <label htmlFor="avatar">
                                {' '}
                                <FaEdit />
                            </label>
                        </form>
                        <button className="profile-avatar_btn">
                            <FaCheck />
                        </button>
                    </div>
                    <h1>{currentUser.username}</h1>
                    <form className="form profile_form">
                        <p className="form_error-message">
                            This is an Error message
                        </p>
                        <input
                            type="text"
                            placeholder="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                            onChange={(e) => setNewpassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmNewPassword}
                            onChange={(e) =>
                                setConfirmNewpassword(e.target.value)
                            }
                        />
                        <button className="profile_btn">Update Details</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

Userprofile.propTypes = {};

export default Userprofile;
