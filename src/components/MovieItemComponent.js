import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MovieItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      rateScore: 0,
      actors: [],
      releaseDate: "",
      imageUrl: "",
      isLiked: false,
    };
  }
  render() {
    var {
      id,
      name,
      description,
      rateScore,
      actors,
      releaseDate,
      imageUrl,
      isLiked,
    } = this.props;
    console.log(this.props);
    return (
      // <div className="row mb-2 mt-4"></div>
<<<<<<< HEAD
      <Router>
        <div className="col-md-6">
          <div className="row mb-2 mt-4">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start text-left">
                <h3 className="name">{name}</h3>
                <div className="mb-1 text-muted">{releaseDate}</div>
                <p className="card-text mb-auto">{description}</p>
                <div className="rating-start inline">
                  <strong>Rate Score:</strong>
                  <ul>
                    <li>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </li>
                  </ul>
                </div>
                <a href="/movie/:id">Continue reading...</a>
                <div className="movie-like">
                  <button>
                    <i className="fa fa-heart-o"></i>
                  </button>
                </div>
=======
      <div className="col-md-6">
        <div className="row mb-2 mt-4">
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <div className="card-body d-flex flex-column align-items-start text-left">
            <h3 className="name">Ký Sinh Trùng</h3>
            <div className="mb-1 text-muted">21 June 2019 (Vietnam)</div>
            <p className="card-text mb-auto">
              A poor family, the Kims, con their way into becoming...
            </p>
            <div className="rating-start inline">
              <strong>Rate Score:</strong>
              <ul>
                <li>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
            </div>
            <a href="/movie">Continue reading...</a>
            
          </div>
          <img
            className="card-img-right flex-auto d-none d-lg-block"
              src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="Card image"
          />

        </div>
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <div className="card-body d-flex flex-column align-items-start text-left">
              <h3 className="name">Hố Sâu Đói Khát </h3>
              <div className="mb-1 text-muted"> 8 November 2019 (Spain)</div>
            <p className="card-text mb-auto">
              A vertical prison with one cell per level. Two people per cell. One only food...
            </p>
            <div className="rating-start inline">
              <strong>Rate Score:</strong>
              <ul>
                <li>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </li>
              </ul>
            </div>
            <a href="/movie">Continue reading...</a>
          </div>
          <img
            className="card-img-right flex-auto d-none d-lg-block"
              src="https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="Card image"
          />
          
          <div className="movie-like">
            <button>
              <i className="fa fa-heart-o"></i>
            </button>
          </div>
        </div>
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start text-left">
              <h3 className="name ">Quý Ông Thế Giới Ngầm</h3>
              <div className="mb-1 text-muted">21 February 2020 (Vietnam)</div>
              <p className="card-text mb-auto">
                An American expat tries to sell off his highly profitable marijuana empire...
            </p>
              <div className="rating-start inline">
                <strong>Rate Score:</strong>
                <ul>
                  <li>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
>>>>>>> 11504542134b1e6656c0bc9781d3ff0392e95944
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                src={imageUrl}
                alt="Card image"
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MovieItemComponent;
