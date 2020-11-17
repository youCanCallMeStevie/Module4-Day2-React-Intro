import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"; //make sure your css is below, so that your bespoke css's specificity is more powerful
import "./App.css";


import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Jumbotron />
      <Home />
      <Footer />

      </>
    );
}
}


export default App;
