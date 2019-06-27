import React from "react";
import { connect } from "react-redux";
import * as upcomingActions from "../../redux/actions/upcomingActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import UpcomingList from "./UpcomingList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class UpcomingPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const { upcomingmovies, actions } = this.props;

    if (upcomingmovies.length === 0) {
      actions.loadUpcoming().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h4>Upcoming Movies</h4>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <UpcomingList
              upcomingmovies={this.props.upcomingmovies}
            />
          </>
        )}
      </>
    );
  }
}

UpcomingPage.propTypes = {
  upcomingmovies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    upcomingmovies:
      state.upcomingmovies.length === 0
        ? []
        : state.upcomingmovies.map(movie => {
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
      loadUpcoming: bindActionCreators(upcomingActions.loadUpcoming, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingPage);
