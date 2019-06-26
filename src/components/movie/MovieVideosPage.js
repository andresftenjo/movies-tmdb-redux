import React from "react";
import { connect } from "react-redux";
import * as detailMovieActions from "../../redux/actions/detailMovieActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MovieDetailPage from "./MovieDetailPage"; 
import Spinner from "../common/Spinner";
import TopPopularPage from "../RelatedMovies/TopPopularPage";

class MovieVideosPage extends React.Component {
  state = {
  };
  
  constructor(props) {
    super(props);
    this.state = {
        movId : props.match.params.id
    };
  }

  componentDidMount() {


    const { movievideos, moviedetails, actions } = this.props;
  
    actions.loadMovieDetails(this.state.movId).catch(error => {
      alert("Loading Movie Details failed" + error);
    });

    actions.loadVideoMovies(this.state.movId).catch(error => {
       alert("Loading Movie Video failed" + error);
    });
  }

  render() {
    return (
      <>
        <div className="pageList">
          {this.props.loading ? (
            <Spinner />
          ) : (
            <>
            <MovieDetailPage
                movievideos={this.props.movievideos}
                moviedetails={this.props.moviedetails}
              />
              <div><button
               onClick={() => this.props.history.goBack()}
               >Back</button></div>
              <TopPopularPage movId={this.state.movId} />
            </>
          )}
        </div>
      </>
    );
  }
}

MovieVideosPage.propTypes = {
  movievideos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  moviedetails: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movievideos: state.movievideos,
    moviedetails: state.moviedetails,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: {
      loadVideoMovies: bindActionCreators(detailMovieActions.loadMovieVideos, dispatch),
      loadMovieDetails: bindActionCreators(detailMovieActions.loadMovie, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieVideosPage);
