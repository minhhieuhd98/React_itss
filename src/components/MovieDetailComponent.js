import React, { Component } from "react";
import BoxCommentComponent from "./BoxCommentComponent";
import ListCommentComponent from "./ListCommentComponent";

class MovieDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [
        {
          name: "Ký Sinh Trùng",
          description:
            "A poor family, the Kims, con their way into becoming...",
          rateScore: 0,
          actors: ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
          releaseDate: "21 June 2019 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "Hố Sâu Đói Khát",
          description:
            "A vertical prison with one cell per level. Two people per cell. One only food...",
          rateScore: 7.9,
          actors: ["Lee Min Hoo", "Nguyen Minh Hieu :))", "dua day!!"],
          releaseDate: "8 November 2019 (Spain)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "Quý Ông Thế Giới Ngầm",
          description:
            "An American expat tries to sell off his highly profitable marijuana empire...",
          rateScore: 8,
          actors: ["Will Smith", "Todd Phillips"],
          releaseDate: "21 February 2020 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "1917",
          description:
            "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned...",
          rateScore: 6,
          actors: ["Joaquin Phoenix", "Robert De Niro"],
          releaseDate: "21 February 2018 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "Joker (2019)",
          description:
            "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society....",
          rateScore: 4,
          actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
          releaseDate: "21 February 2019 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "La Casa de Papel",
          description:
            "A group of unique robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.",
          rateScore: 5,
          actors: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño" ],
          releaseDate: "4 March 2020 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZTNiY2FiYzktNWNmMi00YjMzLTkwMWItMGE3ZDc5OWYzODIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        }
      ],
      listComments: [],
    };
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
  }
  handleAddToDo = (item) => {
    this.state.listComments.push(item);
    this.setState({ listComments: this.state.listComments });
  };
  handleDeleteToDo = (index) => {
    this.state.listComments.splice(index, 1);
    this.setState({ listComments: this.state.listComments });
  };
  render() {
    return (
      <div className="container">
        {this.state.listMovies.map((movie, index) => {
          if (index == this.props.match.params.id)
            return (
              <div className="row">
                <div class="col-md-8">
                  <img class="img-fluid" src={movie.imageUrl} alt="" />
                </div>
                <div class="col-md-4">
                  <h3 class="my-3">{movie.name}</h3>
                  <p>{movie.description}</p>
                  <h3 class="my-3">Stars</h3>
                  <ul>
                    {movie.actors.map((actor, index) => {
                      return <li key="index">{actor}</li>;
                    })}
                  </ul>
                  <strong>Rate: {movie.rateScore}</strong>
                  <p class="font-italic">Release Date: {movie.releaseDate}</p>
                </div>
              </div>
            );
        })}
        <BoxCommentComponent onAddToDo={this.handleAddToDo} />
        <div>
          {this.state.listComments.map((item, index) => {
            return (
              <ListCommentComponent
                key={index}
                comment={item.comment}
                onToDoDelete={() => this.handleDeleteToDo(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default MovieDetailComponent;
