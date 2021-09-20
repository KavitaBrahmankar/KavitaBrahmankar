import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ListChefComponent from "./ListChefComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/admin" />;;
    }
    return (
      <div className="Admin">
        <h1>This is an Admin Page</h1>
        <>
        <ListChefComponent/>
        </>
        <button>
          <Link to="/logout">Logout</Link>
        </button>
      </div>
    );
  }
}
