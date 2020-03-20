// this needs to import the charList and be styled w reactStrap.. so use some button thing or jumbotron from yesterdays nasa practice .  

import React, { useState, useEffect } from "react";
import Charlist from "./CharList";
import axios from "axios";
import { Jumbotron, Button } from "reactstrap";

export default function Card(props) {
    console.log(props);
    return (
        <div class="container"> 
            <Jumbotron>
                <h1 className="display-3">Character Name: {props.name}</h1>
                <h2 className="display-4">Gender: {props.gender}</h2>
                <h3 className="display-4">Mass(kg): {props.mass}</h3>
                <h3 className="display-4">Hair Color: {props.hairColor}</h3>
                <Button color="primary">Click for my {props.birth}</Button>
            </Jumbotron>
        </div>
    )
};


{/* <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div> */}