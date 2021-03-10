import React from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

export default function Profile(props) {
    const urlParams = useParams()
    let petName = urlParams.petName;
    let pet =  _.find(props.petArray, {name: petName});
    console.log('img/' + petName + '.jpg')
    return (
        <div className="profile-body">
            <div className= "profile-flex-container">

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