import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPaw, faChevronLeft, faEnvelope, faSmile, faPlusSquare, faBars, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';

function NavBar(props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const user = props.user;

    const handleSignOut = () => {
        firebase.auth().signOut();
      }

    return (
        <div className="nav-div">
            <nav>
                <ul className="splash-link">
                    <li>
                        <Link to='/splash'> <FontAwesomeIcon icon={faChevronLeft}/> </Link>
                    </li>
                </ul>
              
                <ul className="filter-link"> 
                    <li>
                        <div onClick={() => props.onFilterClick()}><FontAwesomeIcon icon={faFilter}/></div>
                    </li>
                </ul>

                <div className="logo">Perfect Paw Partner</div>
                
                <ul className="paw-link">
                    <li>
                        <Link to='/home'><FontAwesomeIcon icon={faPaw}/></Link>
                    </li>
                </ul>
                
                <ul className="nav-links">
                    <li>
                        <Link to='/bookmark' ><FontAwesomeIcon className="bookmarkButton" icon={faBookmark}/> </Link>
                    </li>
                    <li>
                        {user === null ? <button><Link to="/login" className="loginButton">Sign In</Link></button> : <button onClick={handleSignOut}>Sign Out</button>}
                    </li>
                </ul>
                <ul className="hamburger-link">
                    <li>
                        <div onClick={() => setShowDropdown(!showDropdown)}><FontAwesomeIcon icon={faBars}/></div>
                    </li>
                </ul>
                { showDropdown && 
                    <div className="dropdown">
                        <Link to="/splash">Back to Splash</Link>
                        <Link to="/bookmark">Bookmark</Link>
                        {user === null ? <Link to="/login" className="loginButton">Sign In</Link> : <div onClick={handleSignOut} className="logoutButton"> Sign Out</div>}
                    </div>
                }
            </nav>
        </div>
    )
}

export default NavBar;