import React from "react";
import { render } from "react-dom";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Summary />
      <Footer />
      <Copyright />
    </>
  );
};

render(<App />, document.getElementById("root"));
