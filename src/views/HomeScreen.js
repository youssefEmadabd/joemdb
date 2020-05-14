import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import Search from "./Search";
import Auth from "../utils/Auth";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    Auth.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Navbar bg="secondary" expand="lg">
          <Navbar.Brand href="#home">JoeMDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="search">Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={this.logout}>Logout</Button>
        </Navbar>
        <Router>
          <Switch>
            <Route path="/home">
              <div
                style={{
                  fontSize: "70px",
                  fontWeight: "bolder",
                  color: "yellow",
                  paddingTop: "20%",
                  backgroundColor: "black",
                  minHeight: "95vh",
                  overflow: "hidden"
                }}
              >
                WELCOME TO JOEMDB
              </div>
            </Route>
            <Route path="/search">
              <div>
                <Search />
              </div>
            </Route>
            <Route path="/searchResults"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default HomeScreen;
