import { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>
      <div>
        <Header />
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/shop">
            <ShopPage/>
            </Route>
            <Route path="/products">
            <ProductDetailPage />
           </Route>
           <Route path="/contact">
            <ContactPage/>
           </Route>
           <Route path="/team">
            <TeamPage/>
           </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
      </div>
    </>
  );
}

export default App;
