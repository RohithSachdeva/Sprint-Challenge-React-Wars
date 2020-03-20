// this needs to import the charList and be styled w reactStrap.. so use some button thing or jumbotron from yesterdays nasa practice .  

import React, { useState, useEffect } from "react";
import Charlist from "./CharList";
import axios from "axios";
import { Jumbotron } from "reactstrap";

export default function Card(props) {
    console.log(props);
    return (
        <div> 
            <Jumbotron>
                <h1>{props.name}</h1>
            </Jumbotron>
        </div>
    )
};