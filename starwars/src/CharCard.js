
import React from 'react';
import Charlist from './CharList';
import {Jumbotron, Button} from 'reactstrap';

export default function Card(props) {
    const birthday = function () {
        return alert(`${props.name}'s birth year is ${props.birth}`)
    }
    return (
        <div class='container'>
            <Jumbotron>
                <h1 className='display-3'>Character Name: {props.name}</h1>
                <h2 className='display-4'>Gender: {props.gender}</h2>
                <h3 className='display-4'>Mass(kg): {props.mass}</h3>
                <h3 className='display-4'>Hair Color: {props.hairColor}</h3>
                <Button color='primary' onClick={birthday}>Click for my birth year</Button>
            </Jumbotron>
        </div>
    )
};


