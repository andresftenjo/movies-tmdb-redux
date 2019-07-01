import React from "react";
import logo from '../../images/logoportal.png';
import UpcomingPage from "../upcoming/UpcomingPage";

const HomePage = () => (
  <div className="jumbotron">
    <h2><img src={logo} />Live TMDb Movies Lists!</h2>
    <p className="description">Enjoy this movie portal with trailers</p>
    <UpcomingPage />
  </div>
);

export default HomePage;
