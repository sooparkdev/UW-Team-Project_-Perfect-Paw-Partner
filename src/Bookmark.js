import React, {useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function BookmarkList(props) {
    const [bookmark, setBookmark] = useState({})


    useEffect(() => {
        const userRef = firebase.database().ref("user/" + props.user + "/bookmarkList") 
        userRef.on('value', (snapshot) => {
            let snapshotData = snapshot.val();
            console.log(snapshotData)
            setBookmark(snapshotData)
        })
    })

   

    

    if(bookmark == null) {
        return (
            <div className="empty-bookmark">
                <Link to='/home'> <FontAwesomeIcon className="bookmarkBackButton" icon={faChevronLeft}/> </Link>
                <h1> No Bookmarked Cards </h1>
            </div>
        );
    }
    // else {
        const bookmarkObjKeys = Object.keys(bookmark)
        let cardItems = [];
        cardItems = bookmarkObjKeys.map((pet) => {
            return <BookmarkCard key={bookmark[pet].key} petObj={bookmark[pet]} currentUser={props.currentUser} />
        })
    // }
    

    //let petList = props.pets.map((pet) => (<BookmarkCard key={pet.name} petObj={pet} />));
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


