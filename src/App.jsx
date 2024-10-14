import { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
