import React from 'react';

export default function PetList(props) {
    let pets = props.petInfo;
    let card = pets.map((pet) => (<PetCard key={pet.name} petObj={pet} />));
    return (
      <div className="main-page-card-container">
        {card}
      </div>
    );
  }
  
  export function PetCard(props) {
    let pet = props.petObj;
    return (
      <div className="card">
        <button className="modal-button">
          <img className="card-img" src={'img/' + pet.name + '.jpg'} alt={pet.name}/>
          <h3 className="card-title">{pet.name}</h3>
        </button>
      </div>
    );
  }