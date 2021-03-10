import React from 'react';

export default function BookmarkList(props) {
    let petList = props.pets.map((pet) => (<BookmarkCard key={pet.name} petObj={pet} />));
    return (
      <div className="bookmark-container">
        {petList}
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
