import React from "react";
import { connect } from "react-redux";
import * as searchMovieActions from "../../redux/actions/searchMovieActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SearchMoviesList from "./SearchMoviesList";
import Spinner from "../common/Spinner";
import SearchForm from "./SearchForm";
  
class SearchMoviesPage extends React.Component {
  state = {
  };

  constructor(props) {
    super(props);
    this.state = {
      movieTitle : "",
      history: props.history
    };
  }


  componentDidMount() {
    
    const { actions } = this.props;
 
    const urlParams = new URLSearchParams(this.props.location.search)
    const key = urlParams.get('title')
    
    if (key) actions.loadMovieSearch_(key).catch(error => {
      alert("Searching Movies failed" + error);
    });

  }

  removeQuery = () => {
    this.props.location.search = "";
    this.props.history.push(this.props.location.pathname);
  };

  handleChange = () => {
    const urlParams = new URLSearchParams(this.props.location.search)
    const key = urlParams.get('title')
    
    if (key) this.removeQuery();
  }

  handleSearch = query => {

    const errors = {};
    if (!query) errors.title = "Movie Title is required.";

    this.state.setErrors(errors);
    
    const erros_ = Object.keys(errors).length === 0;
    if (!erros_) return;

    this.actions.loadMovieSearch_(query).catch(error => {
      alert("Searching Movies failed" + error);
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
             <SearchForm
             movieTitle={this.state.movieTitle}
              errors={this.state.errors}
              onSave={this.handleSearch}
              saving={this.state.saving}
              onChange={this.handleChange}
            />
            </>
          )}
            {this.props.searchmovies.length ? (
            <SearchMoviesList
            searchmovies={this.props.searchmovies}
          />
          ) : (
            <>
           
            </>
          )}
        </div>
      </>
    );
  }
}

SearchMoviesPage.propTypes = {
  searchmovies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    searchmovies:
      state.searchmovies.length === 0
        ? []
        : state.searchmovies.map(movie => {
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
      loadMovieSearch_: bindActionCreators(searchMovieActions.loadMovieSearch, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMoviesPage);
