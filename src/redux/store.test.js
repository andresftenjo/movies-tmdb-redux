import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as upcomingActions from "./actions/upcomingActions";
import * as topMoviesActions from "./actions/topMoviesActions";
import * as relatedMoviesAction from "./actions/relatedMoviesAction";
import * as searchMovieActions from "./actions/searchMovieActions";

it("should handle load upcoming movies", function() {
    const store = createStore(rootReducer, initialState);

    const upcomingMovieList = [{"vote_count":11,"id":283552,"video":false,"vote_average":4.41,"title":"The Light Between Oceans","popularity":4.546151,"poster_path":"/pEFRzXtLmxYNjGd0XqJDHPDFKB2.jpg","original_language":"en","original_title":"The Light Between Oceans","genre_ids":[18],"backdrop_path":"/2Ah63TIvVmZM3hzUwR5hXFg2LEk.jpg","adult":false,"overview":"A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from an adrift rowboat.","release_date":"2016-09-02"},{"vote_count":97,"id":342521,"video":false,"vote_average":6.04,"title":"Keanu","popularity":3.51555,"poster_path":"/udU6t5xPNDLlRTxhjXqgWFFYlvO.jpg","original_language":"en","original_title":"Keanu","genre_ids":[28,35],"backdrop_path":"/scM6zcBTXvUByKxQnyM11qWJbtX.jpg","adult":false,"overview":"Friends hatch a plot to retrieve a stolen cat by posing as drug dealers for a street gang.","release_date":"2016-09-14"},{"poster_path":"/1BdD1kMK1phbANQHmddADzoeKgr.jpg","adult":false,"overview":"On January 15, 2009, the world witnessed the \"Miracle on the Hudson\" when Captain \"Sully\" Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.","release_date":"2016-09-08","genre_ids":[36,18],"id":363676,"original_title":"Sully","original_language":"en","title":"Sully","backdrop_path":"/nfj8iBvOjlb7ArbThO764HCQw5H.jpg","popularity":3.254896,"vote_count":8,"video":false,"vote_average":4.88}];

    const action = upcomingActions.loadUpcomingSuccess(upcomingMovieList);
    store.dispatch(action);

    const loadedUpcomingMovies = store.getState().upcomingmovies;

    expect(loadedUpcomingMovies).toEqual(upcomingMovieList);
});

it("should handle top popular movies", function() {
    const store = createStore(rootReducer, initialState);

    const topPopularMovies = [{"vote_count":1395,"id":429617,"video":false,"vote_average":7.8,"title":"Spider-Man: Far from Home","popularity":515.884,"poster_path":"/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg","original_language":"en","original_title":"Spider-Man: Far from Home","genre_ids":[28,12,878],"backdrop_path":"/dihW2yTsvQlust7mSuAqJDtqW7k.jpg","adult":false,"overview":"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.","release_date":"2019-06-28"},{"vote_count":2396,"id":399579,"video":false,"vote_average":6.7,"title":"Alita: Battle Angel","popularity":313.246,"poster_path":"/xRWht48C2V8XNfzvPehyClOvDni.jpg","original_language":"en","original_title":"Alita: Battle Angel","genre_ids":[28,878,53,12],"backdrop_path":"/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg","adult":false,"overview":"When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.","release_date":"2019-01-31"}];

    const action = topMoviesActions.loadTopMoviesSuccess(topPopularMovies);
    store.dispatch(action);

    const loadedTopMovies = store.getState().topmovies;

    expect(loadedTopMovies).toEqual(topPopularMovies);
});

it("should handle related movies", function() {
    const store = createStore(rootReducer, initialState);

    const relatedMovies = [{"adult":false,"backdrop_path":null,"genre_ids":[28],"id":106912,"original_language":"en","original_title":"Darna! Ang Pagbabalik","overview":"Valentina, Darna's snake-haired arch enemy, is trying to take over the Phillipines through subliminal messages on religious TV shows. Darna has her own problems, however, as she has lost her magic pearl and with it the ability to transform into her scantily clad super self. Trapped as her alter-ego, the plucky reporter Narda, she must try to regain the pearl and foil Valentina's plans.","release_date":"1994-05-09","poster_path":null,"popularity":1.012564,"title":"Darna: The Return","video":false,"vote_average":0,"vote_count":0}];

    const action = relatedMoviesAction.loadRelatedMoviesSuccess(relatedMovies);
    store.dispatch(action);

    const loadedRelatedMovies = store.getState().relatedmovies;

    expect(loadedRelatedMovies).toEqual(relatedMovies);
});

it("should handle searched movies", function() {
    const store = createStore(rootReducer, initialState);

    const searchedMovies = [{"vote_count":6476,"id":297802,"video":false,"vote_average":6.8,"title":"Aquaman","popularity":42.468,"poster_path":"/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg","original_language":"en","original_title":"Aquaman","genre_ids":[28,12,14],"backdrop_path":"/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg","adult":false,"overview":"Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.","release_date":"2018-12-07"},{"vote_count":13,"id":65584,"video":false,"vote_average":5.9,"title":"Aquaman","popularity":3.076,"poster_path":"/q2lolQIVPWu2Dv76GrAZ0M693J9.jpg","original_language":"en","original_title":"Aquaman","genre_ids":[28,12,10770],"backdrop_path":"/tSOn45mTdNgD37BlD68eGW2yQwE.jpg","adult":false,"overview":"A young twenty-something diver living in the Florida Keys discovers he has the power to breathe underwater.","release_date":"2006-07-24"},{"vote_count":26,"id":513736,"video":false,"vote_average":6.1,"title":"LEGO DC Super Heroes - Aquaman: Rage Of Atlantis","popularity":6.062,"poster_path":"/fNayc14I8UH9rywBXAp2Eh81za3.jpg","original_language":"en","original_title":"LEGO DC Super Heroes - Aquaman: Rage Of Atlantis","genre_ids":[16,10751,28],"backdrop_path":"/gtTniKFOjZ5muvhuod1FKWZRVQP.jpg","adult":false,"overview":"Aquaman must battle foes in the air, on land and in the depths of the Seven Seas, along with some help from The Justice League, to save the day.","release_date":"2018-07-23"},{"vote_count":0,"id":572802,"video":false,"vote_average":0,"title":"Aquaman 2","popularity":1.234,"poster_path":null,"original_language":"en","original_title":"Aquaman 2","genre_ids":[12,878,28],"backdrop_path":null,"adult":false,"overview":"A sequel to Aquaman (2018).","release_date":"2022-12-14"},{"vote_count":11,"id":66820,"video":false,"vote_average":6.7,"title":"Aquamania","popularity":2.43,"poster_path":"/8GG2cP6mBD32zwHYBJwy6Yr2Z7Z.jpg","original_language":"en","original_title":"Aquamania","genre_ids":[16],"backdrop_path":"/x0vfL17OB05EMsLDmlUs6fWTdte.jpg","adult":false,"overview":"Mr. X buys a boat and inadvertantly enters the water skiing race. With Junior driving, with no experience, he's a bit out of his league.","release_date":"1961-12-20"}];

    const action = searchMovieActions.loadMovieSearchSuccess(searchedMovies);
    store.dispatch(action);

    const loadedSearchedMovies = store.getState().searchmovies;

    expect(loadedSearchedMovies).toEqual(searchedMovies);
});