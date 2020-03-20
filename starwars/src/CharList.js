
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

    //set up the use state.  Use effect + axios get ... Enclose all of this into one function for export to the main app page.. (Style here? or later)


import React, { useState, useEffect } from "react";
import axios from "axios";





const [data, setData] = useState([]);

useEffect()