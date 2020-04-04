import React, { Component } from "react";

class AddMovieFormComponent extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="movie-name">Email address</label>
            <input
              type="text"
              class="form-control"
              id="movie-name"
              placeholder="Name..."
            />
            >
          </div>
          <div class="form-group">
            <label for="description">Example textarea</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddMovieFormComponent;
