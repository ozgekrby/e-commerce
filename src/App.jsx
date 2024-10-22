import { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <div>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/shop">
            <ShopPage/>
            </Route>
          </Switch>
          <Footer />
      </div>
    </>
  );
}

export default App;
