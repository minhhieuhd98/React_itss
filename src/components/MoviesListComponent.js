import React, { Component } from "react";
import MovieItemComponent from "./MovieItemComponent";
import { BrowserRouter as Router } from "react-router-dom";

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
              </span>
            </div>
            <div className="input-group">
              <a
                href="/add"
                className="btn btn-secondary btn-lg active mt-2"
                role="button"
                aria-pressed="true"
              >
                Add new movie
              </a>
            </div>
          </div>

          <div className="row mb-2 mt-4">
            <MovieItemComponent />
            <MovieItemComponent />
            <MovieItemComponent />
          </div>
        </Router>
      </div>
    );
  }
}

export default MoviesListComponent;
