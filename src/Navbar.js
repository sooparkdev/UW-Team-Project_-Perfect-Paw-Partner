import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPaw, faChevronLeft, faEnvelope, faSmile, faPlusSquare, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="nav-div">
            <nav>

                <ul className="splash-link">
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faChevronLeft}/></a>
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
                        <a href="/"><FontAwesomeIcon icon={faPaw}/></a>
                    </li>
                </ul>
                
                {/* * <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>  */}
                <ul className="nav-links">
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faPlusSquare}/></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faSmile}/></a>
                    </li>
                </ul>
                <ul className="hamburger-link">
                    <li>
                        <div onClick={() => setShowDropdown(!showDropdown)}><FontAwesomeIcon icon={faBars}/></div>
                    </li>
                </ul>
                { showDropdown && 
                    <div className="dropdown">
                        <a href="splash-page.html">Back to Splash</a>
                        <a href="#new-post">New Post</a>  
                        <a href="#message">Messaging</a>
                        <a href="#profile">Profile</a>
                    </div>
                }
            </nav>
        </div>
    )
}

export default NavBar;

