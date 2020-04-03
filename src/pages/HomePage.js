import React, { Component } from "react";

import MoviesListComponent from "../components/MoviesListComponent";
import Footer from "../components/Footer";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <MoviesListComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
