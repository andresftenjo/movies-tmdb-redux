import React from "react";
import SearchForm from "./SearchForm";
import renderer from "react-test-renderer";
import SearchMoviesList from "./SearchMoviesList";

it("sets submit movie by title on search page", () => {

    const errors = {};
    errors.title = "Movie Title is required.";

    const tree = renderer.create(
        <SearchForm
        movieTitle="Men in black"
         errors={errors}
         onSave={jest.fn()}
         saving={false}
         onChange={jest.fn()}
       />
    );
}); 

it("match expected search movie form html", () => {
    
        const errors = {};
        errors.title = "Movie Title is required.";
    
        const tree = renderer.create(
            <SearchForm
            movieTitle="Men in black"
             errors={errors}
             onSave={jest.fn()}
             saving={false}
             onChange={jest.fn()}
           />
        );

        expect(tree).toMatchSnapshot();
});

it("render movie results after search", () => {
    
        const searchedResults = [{"vote_count":6476,"id":297802,"video":false,"vote_average":6.8,"title":"Aquaman","popularity":42.468,"poster_path":"/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg","original_language":"en","original_title":"Aquaman","genre_ids":[28,12,14],"backdrop_path":"/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg","adult":false,"overview":"Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.","release_date":"2018-12-07"},{"vote_count":13,"id":65584,"video":false,"vote_average":5.9,"title":"Aquaman","popularity":3.076,"poster_path":"/q2lolQIVPWu2Dv76GrAZ0M693J9.jpg","original_language":"en","original_title":"Aquaman","genre_ids":[28,12,10770],"backdrop_path":"/tSOn45mTdNgD37BlD68eGW2yQwE.jpg","adult":false,"overview":"A young twenty-something diver living in the Florida Keys discovers he has the power to breathe underwater.","release_date":"2006-07-24"},{"vote_count":26,"id":513736,"video":false,"vote_average":6.1,"title":"LEGO DC Super Heroes - Aquaman: Rage Of Atlantis","popularity":6.062,"poster_path":"/fNayc14I8UH9rywBXAp2Eh81za3.jpg","original_language":"en","original_title":"LEGO DC Super Heroes - Aquaman: Rage Of Atlantis","genre_ids":[16,10751,28],"backdrop_path":"/gtTniKFOjZ5muvhuod1FKWZRVQP.jpg","adult":false,"overview":"Aquaman must battle foes in the air, on land and in the depths of the Seven Seas, along with some help from The Justice League, to save the day.","release_date":"2018-07-23"},{"vote_count":0,"id":572802,"video":false,"vote_average":0,"title":"Aquaman 2","popularity":1.234,"poster_path":null,"original_language":"en","original_title":"Aquaman 2","genre_ids":[12,878,28],"backdrop_path":null,"adult":false,"overview":"A sequel to Aquaman (2018).","release_date":"2022-12-14"},{"vote_count":11,"id":66820,"video":false,"vote_average":6.7,"title":"Aquamania","popularity":2.43,"poster_path":"/8GG2cP6mBD32zwHYBJwy6Yr2Z7Z.jpg","original_language":"en","original_title":"Aquamania","genre_ids":[16],"backdrop_path":"/x0vfL17OB05EMsLDmlUs6fWTdte.jpg","adult":false,"overview":"Mr. X buys a boat and inadvertantly enters the water skiing race. With Junior driving, with no experience, he's a bit out of his league.","release_date":"1961-12-20"}];
    
        const tree = renderer.create(
            <SearchMoviesList
            searchmovies={searchedResults}
            refreshMovie={jest.fn()}
           />
        );

        expect(tree).toMatchSnapshot();
});
    