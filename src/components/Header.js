import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import MoviesListComponent from "./MoviesListComponent";
import MovieDetailComponent from "../components/MovieDetailComponent";
import FavoriteMovieListPage from "../pages/FavoriteMovieListPage";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1">
                <a className="text-muted" href="#">
                  Cinema Store
                </a>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="btn btn-sm btn-outline-secondary" href="#">
                  Register
                </a>
              </div>
            </div>

            <div className="flex-nowrap justify-content-between align-items-center mt-3">
              <nav className="navbar navbar-expand-md bg-light">
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="navbar-brand mb-0 h1" href="/home">
                        Movies List <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="navbar-brand mb-0 h1" href="/like-movies">
                        Most Viewed Movies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="navbar-brand mb-0 h1" href="/about">
                        About Us.
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>

          <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0 text-left">
              <h1 className="display-4 font-italic">
                Title of a longer featured blog post
              </h1>
              <p className="lead my-3">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what's most interesting in this
                post's contents.
              </p>
              <p className="lead mb-0">
                <a href="#" className="text-white font-weight-bold">
                  Continue reading...
                </a>
              </p>
            </div>
          </div>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/home" exact component={HomePage}></Route>
            <Route
              path="/like-movies"
              exact
              component={FavoriteMovieListPage}
            ></Route>
            <Route path="/about" exact component={MovieDetailComponent}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Header;
