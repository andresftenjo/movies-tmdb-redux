import React from "react";
import TopPopularPage from "./TopPopularPage";
import * as actions_ from "../../redux/actions/topMoviesActions";
import renderer from "react-test-renderer";

it("render top movies page", () => {
        const topMovies = [{"vote_count":1395,"id":429617,"video":false,"vote_average":7.8,"title":"Spider-Man: Far from Home","popularity":515.884,"poster_path":"/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg","original_language":"en","original_title":"Spider-Man: Far from Home","genre_ids":[28,12,878],"backdrop_path":"/dihW2yTsvQlust7mSuAqJDtqW7k.jpg","adult":false,"overview":"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.","release_date":"2019-06-28"},{"vote_count":2396,"id":399579,"video":false,"vote_average":6.7,"title":"Alita: Battle Angel","popularity":313.246,"poster_path":"/xRWht48C2V8XNfzvPehyClOvDni.jpg","original_language":"en","original_title":"Alita: Battle Angel","genre_ids":[28,878,53,12],"backdrop_path":"/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg","adult":false,"overview":"When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.","release_date":"2019-01-31"}];
    
        <TopPopularPage
        topmovies={topMovies}
        actions={actions_}
      />
}); 

