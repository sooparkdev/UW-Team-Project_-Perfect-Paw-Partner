import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {
    const user = props.user;
    const setBookmark = props.setBookmark;
    const urlParams = useParams();
    let petName = urlParams.petName;
    let pet =  _.find(props.petArray, {name: petName});

    const onBookmarkClick = () => {
        firebase.database().ref("user/" + props.user + "/bookmarkList").push(pet)
    }

    return (
        <div className="profile-body">
            <div className= "profile-flex-container">
                <Link to='/home'> <FontAwesomeIcon className="profileBackButton" icon={faChevronLeft}/> </Link>
                <section className="profile-column pic-section">
                    <img src={'/img/' + petName + '.jpg'} alt={"profile picture of " + pet.name}/>
                </section>

                <section className="profile-column text-section">
                    <div className="text-flex-container">

                        <div className="text-item name-item">
                            <ul>
                                <li><h1 className="inline">{pet.name}</h1></li>
                                <li><span className="inline material-icons md-24">pets</span></li> 
                            </ul>
                        </div>

                        <div className="text-item filter-item">
                            <h2>{"Age: " + pet.age}</h2>
                            <h2>{"Size: " + pet.size}</h2>
                            <h2>{"Sex: " + pet.sex}</h2>
                        </div>

                        <div className="text-item bio-item">
                            <p>{pet.bio}</p>
                        </div>

                        <div>
                            {user === null ?  
                             <button className="bookmark-disabled">SIGN IN TO BOOKMARK</button> :
                            <button className="bookmark-button" onClick={onBookmarkClick} >SAVE TO BOOKMARK</button> 
}
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}