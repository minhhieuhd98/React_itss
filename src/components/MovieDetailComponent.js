import React, { Component } from "react";
import BoxCommentComponent from "./BoxCommentComponent";
import { useParams } from "react-router";

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
          actors: [],
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
    };
  }

  render() {
    var id = useParams();
    return (
      <div className="container">
        <h1 class="my-4">id</h1>

        <div class="row">
          <div class="col-md-8">
            <img
              class="img-fluid"
              src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
              alt=""
            />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Movie information</h3>
            <p>
              A poor family, the Kims, con their way into becoming the servants
              of a rich family, the Parks. But their easy\n life gets
              complicated when their deception is threatened with exposure.
            </p>
            <h3 class="my-3">Stars</h3>
            <ul>
              <li>Kang-ho Song</li>
              <li>Sun-kyun Lee</li>
              <li>Yeo-jeong Jo</li>
            </ul>
          </div>
        </div>
        <BoxCommentComponent />
      </div>
    );
  }
}
export default MovieDetailComponent;
