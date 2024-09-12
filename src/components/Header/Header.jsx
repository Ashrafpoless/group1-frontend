
import { NavLink } from 'react-router-dom';
import {  Nav, NavDropdown } from 'react-bootstrap';



import logo from '../../assets/img/logo10.png';
import './Header.css';

const Header = () => {
    

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
                    <Nav.Link className="write" href="/create">Write</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/?cat=art">
                            ART
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/?cat=science">
                            SCIENCE
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/?cat=technology">
                            TECHNOLOGY
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/?cat=cinema">
                            CINEMA
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/?cat=design">
                            DESIGN
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/?cat=food">
                            FOOD
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="user">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">login</Nav.Link>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
