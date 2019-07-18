import React from "react";
import { connect } from "react-redux";
import * as detailMovieActions from "../../redux/actions/detailMovieActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MovieDetailPage from "./MovieDetailPage"; 
import Spinner from "../common/Spinner";
import RelatedMoviesPage from "../relatedmovies/RelatedMoviesPage";
import "./MovieDetail.css";

class MovieVideosPage extends React.Component {
  state = {
  };
  
  constructor(props) {
    super(props);
    this.state = {
        movId : props.match.params.id,
        history: props.history,
        tmbdImgPath: "http://image.tmdb.org/t/p/original/"
    };
  }

  componentDidMount() {
    
    const { actions } = this.props;
  
    actions.loadMovieDetails(this.state.movId);

    actions.loadVideoMovies(this.state.movId);
  }

  render() {
    return (
      <>
        <div className="pageList detailContainer" style={{ backgroundImage: `url(${this.state.tmbdImgPath + this.props.moviedetails.backdrop_path})` }}>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <>
            <MovieDetailPage
                movievideos={this.props.movievideos}
                moviedetails={this.props.moviedetails}
              />
              <div className="backBtn"><button
               onClick={() => this.props.history.goBack()}
               >Back</button></div>
             
            </>
          )}
           <RelatedMoviesPage movId={this.state.movId} history_={this.state.history} />
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
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
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
