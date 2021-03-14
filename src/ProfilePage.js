import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
// 


export default function Profile(props) {
    const [save, setSave] = useState(false)
    //const [cardListObj, setList] = useState({})
    //const [bookmarkedPets, updateBookmarkedPets] = useState(firebase.database().ref("user").child(props.user).child(cardStorage))

    const urlParams = useParams();
    let petName = urlParams.petName;
    let pet =  _.find(props.petArray, {name: petName});

    

    const onBookmarkClick = () => {
        if (firebase.database().ref("user").child(props.user).cardStorage.containsKey(petName)) { // case: pet already bookmarked
            delete firebase.database().ref("user").child(props.user).cardStorage.petName // remove it
        } else { // case: pet isn't bookmarked
            let petObj = findPetFromPetsArray(props.pets, petName);
            firebase.database().ref("user").child(props.user).cardStorage.set({petName:petObj}); // set cardstorage to have a key with the pet's name that stores the object
            // bookmarkedPets.petName = petObj; 
        }
    }

    const findPetFromPetsArray = (arr, name) => {
        for (var i = 0; i < arr.length; i++) {
            if (arr.name == name) {
                return arr[0];
            }
        }
    }

    useEffect(() => {
        const userRef = firebase.database().ref(props.user) 
        userRef.on('value', (snapshot) => {
        const theUserObj = snapshot.val()
    })
    }, [])
    
    
    //function handleBookmarkClick() {

        // if else -- toggle
        // let updatedcardListObj = {...cardListObj};
        // updatedcardListObj[petName] = pet;
        // setList(updatedcardListObj);
        // console.log(props.user)
        // firebase.database().ref("user").child(props.user).set({cardStorage:cardListObj});

        // setSave(!save);
        // if(save) {
        //     if(cardListObj.containsKey(petName)) {
        //         // create object with this particular card object for the first time
        //         let cardListObj = {};
        //         cardListObj[petName] = pet; // way to add an element?
        //         firebase.database().ref("user").child(props.user).push({cardStorage:cardListObj});
        //     } else {
        //         // if we already have the object
                
                
        //     }
        // } else {
        //     firebase.database().ref("user").child(props.user).child(cardStorage[petName]).set(undefined);
        // }

        // setSave(true)
        // if(save) {
        //     let updatedcardListObj = {...cardListObj}
        //     updatedcardListObj[petName] = pet
        //     setList(updatedcardListObj)
        //     if(cardListObj.containsKey(petName)) {
        //         firebase.database().ref("user").child(props.user).set({cardStorage:cardListObj})
        //     }
        // }

        // WHAT COCO SUGGESTED
        // setSave(true)
        // if(save) {
            // if(cardListObj.containsKey(petName)) {
                // let updatedcardListObj = {...cardListObj};
                // updatedcardListObj[petName] = pet;
                // setList(updatedcardListObj);
                // firebase.database().ref("user").child(props.user).set({cardStorage:cardListObj});
        // }
        

        // else {
        //     const newCardObj = pet
        //     const userRef = firebase.database().ref(props.user).set()
        //     userRef.push(undefined)
        // }
    //}

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
                            <button className="bookmark-button" type="button" aria-label="a button saving this pet to bookmark" onClick={onBookmarkClick} >SAVE TO BOOKMARK</button>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}