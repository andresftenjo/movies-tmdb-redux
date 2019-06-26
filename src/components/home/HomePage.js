import React from "react";
/* import { Link } from "react-router-dom"; */
import logo from '../../images/logoportal.png'; // with import
import UpcomingPage from "../upcoming/UpcomingPage";

const HomePage = () => (
  <div className="jumbotron">
    <h2><img src={logo} />Live TMDb Movies Lists!</h2>
    <p className="description">Enjoy this movie portal with trailers</p>
    {/* <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link> */}
    <UpcomingPage />
  </div>
);

export default HomePage;
