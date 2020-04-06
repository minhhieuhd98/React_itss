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
    let list = [];
    list = JSON.parse(localStorage.getItem("list"));
    this.setState({
      listMovies: list,
    });
  }
  onChangeStatus = (id) => {
    console.log("movie id:" + id);
    this.state.listMovies.map((item, index) => {
      if (index === id) {
        item.isLiked = !item.isLiked;
        console.log("status: " + item.isLiked);
        this.state.listMovies[id] = item;
        this.setState({
          listMovies: this.state.listMovies,
        });

        localStorage.setItem("list", JSON.stringify(this.state.listMovies));
      }
    });
  };
  showListMovieLiked(listMovies) {
    return (
      <div>
        {listMovies != null
          ? listMovies.map((movie, index) => {
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
            })
          : ""}
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
