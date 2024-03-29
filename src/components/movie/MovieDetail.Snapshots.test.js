import React from "react";
import MovieDetailPage from "./MovieDetailPage"; 
import renderer from "react-test-renderer";

it("sets a movie detail page", () => {
        const movieDetail = {"adult":false,"backdrop_path":"/agCihVGrXk3hmmwMIgsn2ao1eEa.jpg","belongs_to_collection":{"id":86055,"name":"Men In Black Collection","poster_path":"/rWcgZaoJ0nxTFRn0H6w9bdtoDUI.jpg","backdrop_path":"/xKz6YaOvmnIJQ3MYIpnaa7FBaAB.jpg"},"budget":90000000,"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":35,"name":"Comedy"},{"id":878,"name":"Science Fiction"}],"homepage":"http://www.sonypictures.com/homevideo/meninblack","id":607,"imdb_id":"tt0119654","original_language":"en","original_title":"Men in Black","overview":"After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. Agent Kay and new recruit Agent Jay find themselves in the middle of a deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies.","popularity":32.754,"poster_path":"/f24UVKq3UiQWLqGWdqjwkzgB8j8.jpg","production_companies":[{"id":49325,"logo_path":null,"name":"Parkes+MacDonald Image Nation","origin_country":""},{"id":56,"logo_path":"/cEaxANEisCqeEoRvODv2dO1I0iI.png","name":"Amblin Entertainment","origin_country":"US"},{"id":5,"logo_path":"/71BqEFAF4V3qjjMPCpLuyJFB9A.png","name":"Columbia Pictures","origin_country":"US"},{"id":34,"logo_path":"/GagSvqWlyPdkFHMfQ3pNq6ix9P.png","name":"Sony Pictures","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"1997-07-02","revenue":589390539,"runtime":98,"spoken_languages":[{"iso_639_1":"en","name":"English"},{"iso_639_1":"es","name":"Español"}],"status":"Released","tagline":"Protecting the Earth from the scum of the universe.","title":"Men in Black","video":false,"vote_average":7.1,"vote_count":7974};
        const movieTrailer = { "id": "5c7228570e0a262c0c7c9fdc", "iso_639_1": "en", "iso_3166_1": "US", "key": "CqCkDKS1E2c", "name": "Men in Black (1997) Teaser", "site": "YouTube", "size": 1080, "type": "Teaser" }
        const tree = renderer.create(
          <MovieDetailPage
                movievideos={movieTrailer}
                moviedetails={movieDetail}
          />
        );
}); 

