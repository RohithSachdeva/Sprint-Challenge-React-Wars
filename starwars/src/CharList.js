
// - [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
// "count": 87,
	// "next": "https://swapi.co/api/people/?page=2",
	// "previous": null,
	// "results": [
	// 	{
	// 		"name": "Luke Skywalker",
	// 		"height": "172",
	// 		"mass": "77",
	// 		"hair_color": "blond",
	// 		"skin_color": "fair",
	// 		"eye_color": "blue",
	// 		"birth_year": "19BBY",
	// 		"gender": "male",
	// 		"homeworld": "https://swapi.co/api/planets/1/",
	// 		"films": [

    //set up the use state.  Use effect + axios get ... Enclose all of this into one function for export to the main app page.. (Style here? or later).  style later


import React, { useState, useEffect } from "react";
import axios from "axios";
import Card




export default function CharList(){
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
        name = {sw.name}
        mass = {sw.mass}
        hairColor = {sw.hair_color}
        films = {sw.films}
        />
    );
});
return {character};
};









// const [jokes, setJokes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.chucknorris.io/jokes/search?query=animal")
//       .then(response => {
//         console.log(response.data.result);
//         setJokes(response.data.result);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     // don't forget your dependency array
//   }, []);

// //   return (
// //     <div className="App">
//       <h1>The Toughest Jokes Around 😂 💪</h1>
//       {/* two parameters two parethesis */}
//       {jokes.map((jokeData, index) => {
//         console.log(jokeData);
//         return (
//           <JokeCard
//             // this clears the "key" error 👇
//             key={index}
//             // this is the name of the first parameter in your map
//             icon={jokeData.icon_url}
//             joke={jokeData.value}
//             date={jokeData.created_at}
//           />
//         );
//       })}
//     </div>
//   );



//data.map(e =>)

// axios
// // The API we're requesting data from
// .get("https://randomuser.me/api/?results=5")
// // Once we get a response, we'll map the API endpoints to our props
// .then(response =>
//   response.data.results.map(user => ({
//     name: `${user.name.first} ${user.name.last}`,
//     username: `${user.login.username}`,
//     email: `${user.email}`,
//     image: `${user.picture.thumbnail}`