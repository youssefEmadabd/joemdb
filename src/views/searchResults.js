import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./Search.module.css";
var classNames = require("classnames");

const SearchResults = props=>{
        return <p>${this.props.data}</p>
        console.log(this.props.data);
}
export default SearchResults;