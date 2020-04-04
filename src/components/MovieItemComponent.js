import React, { Component } from "react";

class MovieItemComponent extends Component {
  render() {
    return (
      // <div className="row mb-2 mt-4"></div>
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
            <div className="movie-like">
              <button>
                <i className="fa fa-heart-o"></i>
              </button>
            </div>

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
              </div>
              <a href="/movie">Continue reading...</a>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              src="https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg"
              alt="Card image"
            />
            
          <div className="movie-like">
              <button>
                <i className="fa fa-heart-o"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItemComponent;
