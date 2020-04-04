import React, { Component } from "react";

import MoviesListComponent from "../components/MoviesListComponent";
import Footer from "../components/Footer";

class FavoriteMovieListPage extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {this.props.match.params.likedMovie === "likedMovie" ? (
            <MoviesListComponent statusLiked={true} />
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default FavoriteMovieListPage;
