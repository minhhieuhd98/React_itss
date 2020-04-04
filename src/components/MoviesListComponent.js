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
            </div>
          </div>

          {/* <div className="row mb-2 mt-4"> */}
            <MovieItemComponent />
            {/* <MovieItemComponent />
            <MovieItemComponent /> */}
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default MoviesListComponent;
