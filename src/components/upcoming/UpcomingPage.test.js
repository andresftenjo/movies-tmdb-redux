import React from "react";
import UpcomingPage from "./UpcomingPage";
import * as actions_ from "../../redux/actions/topMoviesActions";
import renderer from "react-test-renderer";

it("render top movies page", () => {
        const upcomingMovieList = [{"vote_count":11,"id":283552,"video":false,"vote_average":4.41,"title":"The Light Between Oceans","popularity":4.546151,"poster_path":"/pEFRzXtLmxYNjGd0XqJDHPDFKB2.jpg","original_language":"en","original_title":"The Light Between Oceans","genre_ids":[18],"backdrop_path":"/2Ah63TIvVmZM3hzUwR5hXFg2LEk.jpg","adult":false,"overview":"A lighthouse keeper and his wife living off the coast of Western Australia raise a baby they rescue from an adrift rowboat.","release_date":"2016-09-02"},{"vote_count":97,"id":342521,"video":false,"vote_average":6.04,"title":"Keanu","popularity":3.51555,"poster_path":"/udU6t5xPNDLlRTxhjXqgWFFYlvO.jpg","original_language":"en","original_title":"Keanu","genre_ids":[28,35],"backdrop_path":"/scM6zcBTXvUByKxQnyM11qWJbtX.jpg","adult":false,"overview":"Friends hatch a plot to retrieve a stolen cat by posing as drug dealers for a street gang.","release_date":"2016-09-14"},{"poster_path":"/1BdD1kMK1phbANQHmddADzoeKgr.jpg","adult":false,"overview":"On January 15, 2009, the world witnessed the \"Miracle on the Hudson\" when Captain \"Sully\" Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.","release_date":"2016-09-08","genre_ids":[36,18],"id":363676,"original_title":"Sully","original_language":"en","title":"Sully","backdrop_path":"/nfj8iBvOjlb7ArbThO764HCQw5H.jpg","popularity":3.254896,"vote_count":8,"video":false,"vote_average":4.88}];
    
        <UpcomingPage
        upcomingmovies={upcomingMovieList}
        actions={actions_}
      />
}); 

