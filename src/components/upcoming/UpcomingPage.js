import React from "react";
import { connect } from "react-redux";
import * as upcomingActions from "../../redux/actions/upcomingActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import UpcomingList from "./UpcomingList";
import Spinner from "../common/Spinner";

class UpcomingPage extends React.Component {
  state = {
  };

  constructor(props){
    super(props);
    this.state={ count: 1}
  }

  componentDidMount() {
    const { upcomingmovies, actions } = this.props;

    if (upcomingmovies.length === 0) {
      actions.loadUpcoming(this.state.count).catch(error => {
        alert("Loading upcoming movies " + error);
      });
    }
  }

  getPrevUpcoming = () => {
    if(this.state.count > 1){
      this.setState({count: this.state.count - 1}, () => { 
        this.props.actions.loadUpcoming(this.state.count).catch(error => {
          alert("Loading upcoming movies " + error);
        });
      });
    }
  }

  getNextUpcoming = () => {
    
    this.setState({count: this.state.count + 1}, () => { 
      this.props.actions.loadUpcoming(this.state.count).catch(error => {
        alert("Loading upcoming movies " + error);
      });
    });
  }

  render() {
    return (
      <>
      <div className="pageList">
          <h4>Upcoming Movies</h4>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <>
              <UpcomingList
                upcomingmovies={this.props.upcomingmovies}
              />
              <div className="">
                <button className="btnUpcomingPrev" onClick={() => this.getPrevUpcoming()}>Prev</button>
                <button className="btnUpcomingNext" onClick={() => this.getNextUpcoming()}>Next</button>
              </div>
            </>
          )}
        </div>
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
