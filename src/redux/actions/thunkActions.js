import { toast } from "react-toastify";
import md5 from "md5";
import { fetchUser } from "@/axios/userFetch";
import { setUser } from "./clientActions";

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;

  if (!roles.length) {
    fetchUser
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
  return fetchUser
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
    fetchUser.defaults.headers.common["Authorization"] = token;
  } else {
    delete fetchUser.defaults.headers.common["Authorization"];
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

  return fetchUser
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
