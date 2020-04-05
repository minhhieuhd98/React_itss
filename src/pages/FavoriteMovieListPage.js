import React, { Component } from "react";

import MovieItemComponent from "../components/MovieItemComponent";
import Footer from "../components/Footer";

class FavoriteMovieListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [],
    };
    this.showListMovieLiked = this.showListMovieLiked.bind(this);
  }
  componentWillMount() {
    let list = JSON.parse(localStorage.getItem("list"));
    this.setState({
      listMovies: list,
    });
  }
  showListMovieLiked(listMovies) {
    return (
      <div>
        {listMovies.map((movie, index) => {
          if (movie.isLiked)
            return (
              <MovieItemComponent
                key={index}
                id={index}
                name={movie.name}
                description={movie.description}
                rateScore={movie.rateScore}
                actors={movie.actors}
                releaseDate={movie.releaseDate}
                imageUrl={movie.imageUrl}
                isLiked={movie.isLiked}
                onUpdateStatus={this.onChangeStatus}
                onChange={this.onChangeStatus}
              />
            );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.match.params.likedMovie === "likedMovie"
            ? this.showListMovieLiked(this.state.listMovies)
            : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default FavoriteMovieListPage;
