import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer className=" footer">
            <div className="about-us">
                <p>
                    {' '}
                    <Link to={'/about'}>About Us</Link>{' '}
                </p>
                <p>
                    {' '}
                    <Link>Contact Us</Link>{' '}
                </p>
            </div>
            <div className="copyright">
                <p>
                    All the copyright is reserved for &quot;Hack Your
                    Future&quot; Group One.
                </p>
            </div>
            <div>
                <Link className="icons" to={'/'}>
                    <FaFacebookF />
                </Link>
                <Link className="icons" to={'/'}>
                    <FaLinkedinIn />
                </Link>
                <Link className="icons" to={'/'}>
                    <FaGithub />
                </Link>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
