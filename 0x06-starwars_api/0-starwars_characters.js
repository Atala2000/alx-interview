#!/usr/bin/node
const request = require('request');

function getCharacters (movieId) {
  // Fetch film details
  request(`https://swapi-api.alx-tools.com/api/films/${movieId}`, (error, response, body) => {
    if (error) {
      console.error('Error fetching film data: ', error);
      return;
    }

    try {
      const filmDetails = JSON.parse(body);

      // Check if filmDetails.characters is an array
      if (Array.isArray(filmDetails.characters)) {
        // Iterate over the characters and fetch their details
        for (const characterURL of filmDetails.characters) {
          request(characterURL, (err, resp, characterBody) => {
            if (err) {
              console.error('Error fetching character: ', err);
              return;
            }

            // Parse the character's details as JSON
            const character = JSON.parse(characterBody);
            const characterName = character.name;
            console.log(characterName);
          });
        }
      } else {
        console.error('Characters data is not an array.');
      }
    } catch (err) {
      console.error('Error parsing film data: ', err);
    }
  });
}

// Check if the movie ID is provided as a command line argument
const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
} else {
  getCharacters(movieId);
}
