<<<<<<< HEAD
import { Link } from 'react-router-dom';
// import background from '../../assets/img/background.png';
// import sectionTwobg from '../../assets/img/350240b4-e0a3-4800-bec2-e6c5138860ce.jpeg'
// import second from  '../../assets/img/bloger_vloger-m.jpg'

=======
>>>>>>> origin/main
import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SERVER_URL from '../../server';

const Homepage = () => {
    const [user, setUser] = useState(null); // State to hold user information

    useEffect(() => {
        // Check if the user is authenticated by making a request to your backend
        const fetchUserData = async () => {
            try {
                const res = await axios.get(
                    SERVER_URL + 'api/auth/login', // Ensure this is the correct endpoint
                    { withCredentials: true } // Ensure cookies are sent with the request
                );
                setUser(res.data); // Set the user data if authenticated
            } catch (err) {
                console.log('User not logged in'); // Log the error for debugging
                setUser(null); // Explicitly set user to null if not logged in
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="homepage">
            {user ? (
                // Show personalized information
                <div className="personalized-content">
                    <h1>Welcome back, {user.username}!</h1>
                    <p>Here’s your personalized content.</p>
                    {/* Add more personalized content */}
                </div>
            ) : (
                // Show generic information
                <>
                    <div className="image-text-section1">
                        <div className="image-container1">
                            <img
                                src="https://www.esstudioediciones.com/blog/libros-publicar-escribir-autoedicion.jpg"
                                alt="Image 1"
                            />
                            <div className="overlay-text1">
                                With Blog, 'Imagination' is limitless
                                <a href="register/">
                                    <button>Get Started</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="column">
                            <h2>Build a blog</h2>
                            <p>
                                Write freely while experiencing our intuitive platform for
                                blogging.
                            </p>
                        </div>
                        <div className="column">
                            <h2>Manage your projects</h2>
                            <p>
                                Streamline your day-to-day with Blog, tailored to your
                                needs.
                            </p>
                        </div>
                        <div className="column">
                            <h2>Grow online</h2>
                            <p>
                                Expand your reach and share your blogs with your
                                network.
                            </p>
                        </div>
                    </div>

                    <div className="image-text-section1">
                        <div className="image-container1">
                            <img
                                src="https://educacionencasacolombia.com/wp-content/uploads/2022/09/escritor.jpg"
                                alt="image3"
                            />
                            <div className="overlay-text1">
                                Lacking Inspiration? Check our blogs!
                                <div>
                                    <a href="posts/">
                                        <button>See blogs</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overlay-text2">
                        Take your project to the next level
                        <div>
                            <a href="register/">
                                <button className="button3">Start Now</button>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Homepage;
