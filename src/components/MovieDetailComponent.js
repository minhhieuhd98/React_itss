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
          rateScore: 0,
          actors: [],
          releaseDate: "8 November 2019 (Spain)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
        {
          name: "Quý Ông Thế Giới Ngầm",
          description:
            "An American expat tries to sell off his highly profitable marijuana empire...",
          rateScore: 0,
          actors: [],
          releaseDate: "21 February 2020 (Vietnam)",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
          isLiked: false,
        },
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
        <div class="row">
          <div class="col-md-8">
            <img
              class="img-fluid"
              src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
              alt=""
            />
          </div>
          {this.state.listMovies.map((movie, index) => {
            if (index == this.props.match.params.id)
              return (
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
              );
          })}
        </div>
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
