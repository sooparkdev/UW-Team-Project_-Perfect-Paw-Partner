import React, { useState, useEffect } from 'react';
import PetList from './Card';
import NavBar from './Navbar';
import BookmarkList from './Bookmark';
import FilterBar from './Filterbar';
import Profile from './ProfilePage'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ],
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
};

export function App(props) {
  const pets = props.pets;
  const [user, setUser] = useState(null);
  const [userInfo, setInfo] = useState(undefined);
  const [bookmark, setBookmark] = useState({});
  console.log(bookmark)


  useEffect(() => {
    const authUnregisterFunction = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setInfo(user.uid);
        setUser(user);
        const userRef = firebase.database().ref("user/" + user.uid + "/bookmarkList"); 
        userRef.on('value', (snapshot) => {
            let snapshotData = snapshot.val();
            setBookmark(snapshotData);
        })
      } else {
        setUser(null);
        setInfo(null);
      }
    })

  return function cleanup() {
    authUnregisterFunction();
  }

  }, [])

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <SplashPage pets={pets}/> </Route>
          <Route path="/home"> <HomePage pets={pets} user={user} /> </Route>
          <Route path="/splash"> <SplashPage /> </Route>
          <Route path="/login"> <LoginPage pets={pets} user={user} setUser={setUser} /> </Route>
          <Route path="/bookmark"> <BookmarkList pets={pets} user={userInfo} bookmark={bookmark} setBookmark={setBookmark}/> </Route>
          <Route path="/adopt/:petName"> <Profile petArray={pets} user={userInfo} bookmark={bookmark} setBookmark={setBookmark}/> </Route>
        </Switch>      
      </BrowserRouter>
  )
}

export function LoginPage (props) {
  const pets = props.pets;
  const user = props.user;

  let content = null;

  if(user) {
    return (
      <Redirect to='/home'/>
    );
  } else {
    content = (
      <div className="container">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  }

  return (
    <div>
      {content}
    </div>
  );
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
  const [state, setState] = useState(initialState);
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
  const user = props.user;

  return (
    <div>
      <header>
        <NavBar showFilters={showMobileFilters} onFilterClick={toggleFilters} user={user} />
      </header>
      <main>
        <div className="main-page-container">
          <div className="main-page-pets">
            <FilterBar state={state} onChange={onChange} showFilterDropdown={showMobileFilters} className="main-page-first-col"/>
            <section className="main-page-second-col">
              <PetList state={state} petInfo={pets}/>
            </section>
          </div>
        </div>
      </main>
      <footer>
        <address>
          Contact us at <a href="mailto:ppp@uw.edu">ppp@uw.edu</a>, or at <a href="tel:123-123-4567">(123) 123-4567</a>
        </address>
        <p>&copy; 2021 INFO 340 Group B12.</p>      
      </footer>
    </div>
  );
}

export default App;
