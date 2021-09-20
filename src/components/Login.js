import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedAdmin = true;
    if (token === null) {
      loggedAdmin = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedAdmin
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    // Login magic

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "sadnqwiojdosadm");
      this.setState({
        loggedAdmin: true
      });
    }else if(username === "kavita" && password === "kavita123"){

    }
  }

  render() {
    if (this.state.loggedAdmin) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.onSubmitForm}>
          <input 
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <input type="submit" />
        </form>
        <button>
          <Link to="/register/">Register</Link>
        </button>
      </div>
    );
  }
}
