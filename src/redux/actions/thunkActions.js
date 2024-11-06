import { toast } from "react-toastify";
import md5 from "md5";
import { setUser } from "./clientActions";
import {
  setCategories,
  setFetchState,
  setProductDetail,
  setProductList,
  setTotal,
} from "./productActions";
import { myApi } from "@/axios/fetch";
import { setCart } from "./cartActions";

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;

  if (!roles.length) {
    myApi
      .get("/roles")
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.error("Roller yüklenirken hata:", error);
        toast.error("Roller yüklenirken hata oluştu");
      });
  }
};

export const loginUser = (credentials) => (dispatch) => {
  return myApi
    .post("/login", {
      email: credentials.email,
      password: credentials.password,
    })
    .then((response) => {
      const userData = response.data?.data || response.data;

      if (!userData) {
        throw new Error("Kullanıcı bilgileri alınamadı");
      }

      if (credentials.rememberMe) {
        const token = userData.token || response.data.token;
        if (token) {
          localStorage.setItem("token", token);
        }
      }

      const userInfo = {
        name: userData.name,
        email: userData.email || credentials.email,
        role_id: userData.role_id,
        avatar: userData.email
          ? `https://www.gravatar.com/avatar/${md5(userData.email)}?d=mp`
          : `https://www.gravatar.com/avatar/${md5(credentials.email)}?d=mp`,
        token: userData.token,
      };
      dispatch(setUser(userInfo));
      toast.success("Giriş başarılı!");

      return true;
    })
    .catch((error) => {
      console.error("Login error details:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "Giriş başarısız";
      toast.error(errorMessage);
      return false;
    });
};

export const setAuthToken = (token) => {
  if (token) {
    myApi.defaults.headers.common["Authorization"] = token;
  } else {
    delete myApi.defaults.headers.common["Authorization"];
  }
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  setAuthToken(null);
};

export const verifyToken = (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return Promise.resolve(false);
  }

  setAuthToken(token);

  return myApi
    .get("/verify")
    .then((response) => {
      const userData = response.data?.data || response.data;

      if (userData) {
        const userInfo = {
          name: userData.name,
          email: userData.email,
          role_id: userData.role_id,
          avatar: userData.avatar,
          token: token,
        };

        dispatch(setUser(userInfo));
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error("Token verification failed:", error);
      clearAuthData();
      return false;
    });
};

export const fetchCategories = () => (dispatch) => {
  dispatch(setFetchState("loading"));

  return myApi
    .get("/categories")
    .then((response) => {
      dispatch(setCategories(response.data));
      dispatch(setFetchState("success"));
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
      dispatch(setFetchState("error"));
    });
};

export const fetchProducts =
  (queryString = "") =>
  (dispatch) => {
    dispatch(setFetchState("loading"));

    const endpoint = queryString ? `/products?${queryString}` : "/products";

    return myApi
      .get(endpoint)
      .then((response) => {
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState("success"));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState("error"));
      });
  };

export const fetchProductDetail = (productId) => (dispatch) => {
  dispatch(setFetchState("loading"));

  return myApi
    .get(`/products/${productId}`)
    .then((response) => {
      dispatch(setProductDetail(response.data));
      dispatch(setFetchState("success"));
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
      dispatch(setFetchState("error"));
    });
};
export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart; 

  const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

  if (existingProductIndex >= 0) {
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].count += 1;
    dispatch(setCart(updatedCart));
  } else {
    dispatch(setCart([...cart, { count: 1, checked: true, product }]));
  }
};