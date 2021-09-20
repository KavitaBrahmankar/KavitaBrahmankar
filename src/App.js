import React , { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListChefComponent from './components/ListChefComponent.jsx';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateChefComponent from './components/CreateChefComponent.jsx';
import ViewChefComponent from './components/ViewChefComponent.jsx';
import AllChefComponent from './components/AllChefComponent';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Logout from "./components/Logout";


function App() {

  return (
    <>
        <Router>
              <HeaderComponent />
                <div className="container fluid">
                    <Switch> 
                          <Route path = "/" exact component = {AllChefComponent}></Route>                          
                          <Route path = "/chefs" component = {ListChefComponent}></Route>
                          <Route path = "/add-chef/:chefid" component = {CreateChefComponent}></Route>
                          <Route path = "/view-chef/:chefid" component = {ViewChefComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                          <Route path="/login" component={Login}/>
                          <Route exact path="/admin" component={Admin} />
                          <Route exact path="/logout" component={Logout} />
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </>
    
  );

  }

export default App;