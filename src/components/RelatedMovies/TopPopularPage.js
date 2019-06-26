import React from "react";
import { connect } from "react-redux";
import * as topMoviesActions from "../../redux/actions/topMoviesActions";
import * as relatedMoviesAction from "../../redux/actions/relatedMoviesAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import TopMovieList from "./TopMoviesList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class TopPopularPage extends React.Component {
  state = {
  };

  componentDidMount() {
    const { topmovies, actions, movId } = this.props;

    if (topmovies.length === 0) {
      actions.loadTopMovies(this.props.movId).catch(error => {
        alert("Loading Top Popular Movies failed" + error);
      });
    }
  }

  handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <div className="pageList">
          <h4>Related Movies</h4>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <>
              <TopMovieList
                onDeleteClick={this.handleDeleteCourse}
                topmovies={this.props.topmovies}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

TopPopularPage.propTypes = {
  topmovies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    topmovies:
      state.topmovies.length === 0
        ? []
        : state.topmovies.map(movie => {
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
      loadTopMovies: bindActionCreators(relatedMoviesAction.loadRelatedMovies, dispatch),
      deleteCourse: bindActionCreators(topMoviesActions.deleteCourse, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPopularPage);
