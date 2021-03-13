import React, {useEffect} from 'react';
import _ from 'lodash';
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {
    const urlParams = useParams()
    let petName = urlParams.petName;
    let pet =  _.find(props.petArray, {name: petName});

    // useEffect(() => {
    //     const userRef = firebase.database().ref(props.user) 
    //     userRef.on('value', (snapshot) => {
    //     //const theUserObj = snapshot.val()
    // })
    // }, [])

    // const newCardObj = pet

    // const userRef = firebase.database().ref(props.user)
    // userRef.push(newCardObj)

    // function HandleBookmarkClick() {
    // }


    return (
        <div className="profile-body">
            <div className= "profile-flex-container">
                <Link to='/home'> <FontAwesomeIcon className="profileBackButton" icon={faChevronLeft}/> </Link>
                <section className="profile-column pic-section">
                    <img src={'img/' + petName + '.jpg'} alt={"profile picture of " + pet.name}/>
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
                            <button className="bookmark-button" type="button" aria-label="a button saving this pet to bookmark">SAVE TO BOOKMARK</button>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}