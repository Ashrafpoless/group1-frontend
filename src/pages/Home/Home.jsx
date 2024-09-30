import { Link } from 'react-router-dom';

import './Home.css';
const Homepage = () => {
    return (
        <div className="homepage">
            <div className="image-text-section1">
                <div className="image-container1">
                    <img
                        src="https://www.esstudioediciones.com/blog/libros-publicar-escribir-autoedicion.jpg"
                        alt="Image 1"
                    />
                    <div className="overlay-text1">
                        With Blog, &lsquo;Imagination&lsquo; is limitless 
                        
                            <button className='button-two'> <Link to='/register'>Get Started</Link></button>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="column">
                    <h2>Build a blog</h2>
                    <p>
                        Write freely while experience our intuitive platform for
                        blogging
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
                            
                                <button className='button-two'><Link to='/posts'>See blogs</Link></button>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="overlay-text2">
                Take your project to the next level
                <div>
                    <Link to='/register' className="button_three">Start Now</Link> 
                </div>
            </div>

            {/* new sections */}


            {/* the end */}
        </div>
    );
};

Homepage.propTypes = {};

export default Homepage;