import React, { useState } from 'react';
import PetList from './Card';
import NavBar from './Navbar';
import FilterBar from './Filterbar';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export function App(props) {
  const pets = props.pets;

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <SplashPage pets={pets}/> </Route>
          <Route path="/home"> <HomePage pets={pets}/> </Route>
          <Route path="/splash"> <SplashPage /> </Route>
        </Switch>      
      </BrowserRouter>
  )
}

export function SplashPage () {
  return(
      <div className="splash-body">
          <header id="splash-contents">
              <h1>Perfect Paw Partner</h1> 
              <Link to='/home' className="splash-button" aria-label="a button to go to the main page"> GO TO MAIN PAGE </Link>
          </header>
      </div>
  );
}

const initialState = {
  Type: {
    Dog: true,
    Cat: true,
  },
  Size: {
    Small: true,
    Medium: true,
    Large: true,
  },
  Sex: {
    Male: true,
    Female: true,
  },
  Age: {
    '0-1': true,
    '2-5': true,
    '6-10': true,
    '11-15': true,
    '16+': true,
  }
}

function HomePage(props) {
  const [state, setState] = useState(initialState)
  function onChange(category, field, val) {
    const clone = JSON.parse(JSON.stringify(state))
    clone[category][field] = !val
    setState(clone)
  }
  const pets = props.pets;
  const [showMobileFilters, setShowMobileFilters] = useState(true);
  function toggleFilters() {
      setShowMobileFilters(!showMobileFilters);
  }
  return (
    <main>
      <div className="main-page-container">
        <NavBar showFilters={showMobileFilters} onFilterClick={toggleFilters}/>
        <div className="main-page-pets">
          <FilterBar state={state} onChange={onChange} showFilterDropdown={showMobileFilters} className="main-page-first-col"/>
          <section className="main-page-second-col">
            <PetList state={state} petInfo={pets}/>
          </section>
        </div>
        <footer>
          <address>
            Contact us at <a href="mailto:ppp@uw.edu">ppp@uw.edu</a>, or at <a href="tel:123-123-4567">(123) 123-4567</a>
          </address>
          <p>&copy; 2021 INFO 340 Group B12.</p>      
        </footer>
      </div>
    </main>
  );
}

export default App;
