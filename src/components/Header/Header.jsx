import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

import logo from '../../assets/img/logo-background1.png';
import icon from '../../assets/img/sign-in.png';

import './Header.css';

const Header = () => {
    const { currentUser, logout } = useContext(AuthContext);

    const handelClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'You Need to Sign In',
            footer: '<a href="login">Sign In</a>'
        });
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="Group One" />
                    </NavLink>
                </div>

                <div className="links">
                    <Nav.Link href="/posts">Posts</Nav.Link>
                    {currentUser ? (
                        <Nav.Link className="write" href="/create">
                            Write
                        </Nav.Link>
                    ) : (
                        <Nav.Link className="write" onClick={handelClick}>
                            Write
                        </Nav.Link>
                    )}
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/posts/?cat=art">
                            ART
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/posts/?cat=science">
                            SCIENCE
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/posts/?cat=technology">
                            TECHNOLOGY
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/posts/?cat=cinema">
                            CINEMA
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/posts/?cat=design">
                            DESIGN
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/posts/?cat=food">
                            FOOD
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/posts/?cat=general">
                            General
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="user">
                      
                    {currentUser ? (
                       
                       <Nav.Link href="/" onClick={logout}>
                            {' '}
                            Logout
                        </Nav.Link>
                    ) : (
                        <Nav.Link href="/login">
                        <img src={icon} className="icon" alt="Group One" />
                        </Nav.Link>
                        
                    )}
                    {currentUser ? (
                        <Nav.Link href={`/profile/${currentUser.id}`}>
                            {currentUser.username}
                        </Nav.Link>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
