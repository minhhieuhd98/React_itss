import React, { Component } from "react";
import MovieItemComponent from "./MovieItemComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetailComponent from "./MovieDetailComponent";

class MoviesListComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input
                name="keyword"
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa..."
              />
              <span className="input-group-btn">
                <button className="btn btn-primary ml-2" type="button">
                  <span className="fa fa-search mr-2"></span>Search
                </button>
                <button className="btn btn-secondary ml-5" type="button">
                  <span className="fa fa-plus mr-2"></span>Add
                </button>
              </span>
            </div>
          </div>

          <div className="row mb-2 mt-4">
            <MovieItemComponent />
            <MovieItemComponent />
            <MovieItemComponent />
          </div>

          <Switch>
            <Route path="/movie" component={MovieDetailComponent}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MoviesListComponent;
