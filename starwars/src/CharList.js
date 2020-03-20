import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./CharCard";





export default function CharList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                setData(response.data.results);
            })
            .catch(error => {
                console.log("Error returning the data", error);
            });
    }, []);

    console.log(
        data.map(sw => {
            return sw;
        })
    );

    let character = data.map(sw => {
        return (
            <Card
                name={sw.name}
                mass={sw.mass}
                hairColor={sw.hair_color}
                gender={sw.gender}
                skin={sw.skin_color}
                birth={sw.birth_year}
            />
        );
    });
    return <span>{character}</span>
};



