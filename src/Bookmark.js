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
            console.log("hey im here")
            setBookmark(snapshotData)
        })
    })


    // const [bookmark, setArray] = useState([])

    // useEffect(() => {
    //     const userRef = firebase.database().ref(props.user) 
    //     userRef.on('value', (snapshot) => {
    //         const theUserObj = snapshot.val();
    //         let objectKeyArray = Object.keys(theUserObj);
    //         let bookmarkArray = objectKeyArray.map((key) => {
    //             let singleCardObj = theUserObj[key];
    //             singleCardObj.key = key;
    //             return singleCardObj;
    //         })
    //         setArray(bookmarkArray);
    //     })
    // }, [])   

    // if(bookmark.length == 0) return null;

    // let cardItems = [];

    // cardItems = bookmark.map((petObj) => {
    //     return <BookmarkCard key={petObj.key} petObj={petObj} currentUser={props.currentUser} />
    // })


    //let petList = props.pets.map((pet) => (<BookmarkCard key={pet.name} petObj={pet} />));
    return (
      <div className="bookmark-container">
        <Link to='/home'> <FontAwesomeIcon icon={faChevronLeft}/> </Link>
    
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


