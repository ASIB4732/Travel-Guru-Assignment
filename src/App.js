import logo from './logo.svg';
import './App.css';
import Header from './Compunents/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Compunents/Home/Home';
import Error from './Compunents/Error/Error';
import LogIn from './Compunents/Login/LogIn';
import PlaceDateil from './Compunents/PlaceDateil/PlaceDateil';
import { createContext, useState } from 'react';
import Hotel from './Compunents/hotel/Hotel';
import PrivatRouat from './Compunents/privetRouat/PrivatRouat';

export const UserContext=createContext()
export const UserId=createContext()

function App() {
const [user, setUser]=useState({})
const [userInfo, setUserInfo]=useState({})
  return (
    <UserId.Provider value={[userInfo, setUserInfo]}>
    <UserContext.Provider value={[user, setUser]}>
    <div className="App">
      <Router>

      <Switch>
      <Route path="/Home">
      <Header></Header>
      <Home></Home>
      </Route>
      
      <Route path="/LogIn">
      <LogIn></LogIn>
      </Route>

      <PrivatRouat path="/Hotel">
      {/* <Route path="/Hotel"> */}
        <Hotel></Hotel>
      </PrivatRouat>

      <Route path="/:dateil">
      <Header></Header>
      <PlaceDateil></PlaceDateil>
      </Route>

      <Route exact path="/">
      <Header></Header>
      <Home></Home>
      </Route>

      <Route path="*">
        <Error></Error>
      </Route>
      </Switch>
      </Router>
      
    </div>
    </UserContext.Provider>
    </UserId.Provider>
  );
}

export default App;
