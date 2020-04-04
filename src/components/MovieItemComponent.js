import React, { Component } from "react";

class MovieItemComponent extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
          <div className="card-body d-flex flex-column align-items-start text-left">
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
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
            src="src/captain-america.jpg"
            alt="Card image"
          />
          >
          <div className="movie-like">
            <button>
              <i className="fa fa-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItemComponent;
