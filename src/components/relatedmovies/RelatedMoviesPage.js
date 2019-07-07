import React from "react";
import { connect } from "react-redux";
import * as relatedMoviesAction from "../../redux/actions/relatedMoviesAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RelatedMoviesList from "./RelatedMoviesList";
import Spinner from "../common/Spinner";

class RelatedMoviesPage extends React.Component {
  state = {
  };

  componentDidMount() {
    const { actions } = this.props;

      actions.loadRelatedMovies(this.props.movId);
  }

  handleRefresh = movId_ => {
    this.props.history_.push('/movie/' + movId_);
    location.reload();
  };

  render() {
    return (
      <>
        <div className="pageList">
          <h4>Related Movies</h4>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <>
              <RelatedMoviesList
                relatedmovies={this.props.relatedmovies}
                refreshMovie={this.handleRefresh}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

RelatedMoviesPage.propTypes = {
  relatedmovies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  movId: PropTypes.string.isRequired,
  history_: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    relatedmovies:
      state.relatedmovies.length === 0
        ? []
        : state.relatedmovies.slice(0, 3).map(movie => {
            return {
              ...movie
            };
          }),
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    actions: {
      loadRelatedMovies: bindActionCreators(relatedMoviesAction.loadRelatedMovies, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedMoviesPage);
