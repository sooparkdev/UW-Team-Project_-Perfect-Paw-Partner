import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

export default function PetList(props) {
    let pets = props.petInfo;
    let state = props.state;
    let card = pets.filter((pet) => {
      const { petType, size, age, sex } = pet;
      if (state.Type[petType] !== true) {
        return null;
      }
      if (state.Size[size] !== true) {
        return null;
      }
      if (!state.Age[`0-1`] && age >= 0 && age <= 1) {
        return null;
      }
      if (!state.Age[`2-5`] && age >= 2 && age <= 6) {
        return null;
      }
      if (!state.Age[`6-10`] && age >= 6 && age <= 10) {
        return null;
      }
      if (!state.Age[`11-15`] && age >= 11 && age <= 15) {
        return null;
      }
      if (!state.Age[`16+`] && age >= 16) {
        return null;
      }
      if (state.Sex[sex] !== true) {
        return null;
      }
      return pet
    }).map((pet) => (<PetCard key={pet.name} petObj={pet} />));
    return (
      <div className="main-page-card-container">
        {card}
      </div>
    );
  }

  export function PetCard(props) {
    let pet = props.petObj;
    const [redirectTo, setRedirect] = useState(undefined)

    const handleClick = () => {
      setRedirect(pet.name)
    }

    if(redirectTo) { 
      return <Redirect push to={"/adopt/" + redirectTo} />
    } 

    return (
      <div className="card" onClick={handleClick}>
        <button className="modal-button">
          <img className="card-img" src={'img/' + pet.name + '.jpg'} alt={pet.name}/>
          <h3 className="card-title">{pet.name}</h3>
        </button>
      </div>
    );
  }