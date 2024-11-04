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
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/LoginPage";

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
           <Route path="/about">
            <AboutPage/>
           </Route>
           <Route path="/signup">
            <SignUp/>
           </Route>
           <Route path="/login">
            <Login/>
           </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
          <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </div>
    </>
  );
}

export default App;
