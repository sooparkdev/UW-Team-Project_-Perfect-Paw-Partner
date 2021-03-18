import React, {useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function BookmarkList(props) {
    const user = props.user;
    const bookmark = props.bookmark;
    const setBookmark = props.setBookmark;

    if(bookmark == null || user === null) {
        return (
            <div className="empty-bookmark">
                <Link to='/home'> <FontAwesomeIcon className="bookmarkBackButton" icon={faChevronLeft}/> </Link>
                <h1> No Bookmarked Cards </h1>
            </div>
        );
    }

    const bookmarkObjKeys = Object.keys(bookmark);
    let cardItems = [];
    cardItems = bookmarkObjKeys.map((pet) => {
        return <BookmarkCard key={bookmark[pet].key} petObj={bookmark[pet]} currentUser={props.currentUser} />
    })
    
    return (
      <div className="bookmark-container">
        <Link to='/home'> <FontAwesomeIcon className="bookmarkBackButton" icon={faChevronLeft}/> </Link>
        {cardItems}
      </div>
    );
}

function BookmarkCard(props) {
    let pet = props.petObj;
    return (
        <div className="bookmarkCard">
            <button className="modal-button">
                <img className="bookmark-card-img" src={'img/' + pet.name + '.jpg'} alt={pet.name}/>
                <h3>{pet.name}</h3>
            </button>
        </div>
    );
}
