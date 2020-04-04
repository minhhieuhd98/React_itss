import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
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
                <a className="text-muted" href="/">
                  Cinema Store
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
                        Favorite Movie
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/home" exact component={HomePage}></Route>
            <Route
              path="/like-movies"
              exact
              component={FavoriteMovieListPage}
            ></Route>
            <Route
              path="/movie/"
              exact
              component={MovieDetailComponent}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Header;
