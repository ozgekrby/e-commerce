import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min";
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
import { useDispatch } from "react-redux";
import { fetchProducts, verifyToken } from "./redux/actions/thunkActions";
import { setFilter, setOffset } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    verifyToken(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!location.pathname.includes('/shop/')) {
      dispatch(setFilter(''));
      dispatch(setOffset(0));

      const params = new URLSearchParams(location.search);
      const queryString = params.toString();
      dispatch(fetchProducts(queryString));
    }
  }, [dispatch, location.pathname]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/shop/:gender/:category/:categoryId">
          <ShopPage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/products">
          <ProductDetailPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
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
  );
}

export default App;