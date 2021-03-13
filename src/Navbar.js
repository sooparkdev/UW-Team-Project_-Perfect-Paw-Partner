import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPaw, faChevronLeft, faEnvelope, faSmile, faPlusSquare, faBars, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';

function NavBar(props) {
    // const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    // const user = props.user;
    // const handleSignOut = props.handleSignOut;

    const handleSignOut = () => {
        //setErrorMessage(null);
        firebase.auth().signOut();
        // console.log("signed out")
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
                        {/* <a href="#profile"><FontAwesomeIcon icon={faSmile}/></a> */}

                        <button className="btn btn-warning" onClick={handleSignOut}>
                            Log Out
                        </button>
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
                    </div>
                }
            </nav>
        </div>
    )
}

export default NavBar;