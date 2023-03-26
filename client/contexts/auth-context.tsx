import { profileAPI } from "@/lib/user-api";
import { IUser } from "@/types/user-type";
import { defaultUser } from "@/utils/default-user";
import React, { useContext, useEffect, useReducer } from "react";

// AUTH CONTEXT TYPE
type AuthContextType = {
  token: string | null;
  isLoggedIn: null | "AUTHENTICATED" | "UNAUTHENTICATED";
  user: IUser;
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => void;
  // eslint-disable-next-line no-unused-vars
  updateUser: (user: IUser) => void;
  logout: () => void;
};

// AUTH REDUCER ACTION TYPE
type AuthActionType =
  | { type: "LOGIN"; payload: { token: string } }
  | { type: "LOGOUT" }
  | { type: "USER"; payload: { user: IUser } }
  | { type: "LOADING"; payload: { isLoading: boolean } };

// AUTH REDUCER STATE TYPE
type AuthStateType = {
  token: string | null;
  isLoggedIn: null | "AUTHENTICATED" | "UNAUTHENTICATED";
  user: IUser;
  isLoading: boolean;
};

// AUTH REDUCER
const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: "AUTHENTICATED",
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoggedIn: "UNAUTHENTICATED",
        user: defaultUser,
      };
    case "USER": {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    default:
      throw new Error("Invalid action");
  }
};

// Create Context API
const AuthContext = React.createContext<AuthContextType>({
  token: null,
  isLoggedIn: null,
  user: defaultUser,
  isLoading: false,
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => {},
  // eslint-disable-next-line no-unused-vars
  updateUser: (user: IUser) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

// Context Provider
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialAuthState: AuthStateType = {
    token: null,
    isLoggedIn: null,
    user: defaultUser,
    isLoading: false,
  };
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  // Check token
  let storedToken: string | null = null;
  if (typeof window !== "undefined") {
    storedToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (storedToken) {
      dispatch({ type: "LOADING", payload: { isLoading: true } });
      dispatch({ type: "LOGIN", payload: { token: storedToken } });
      // fetch user data
      profileAPI(storedToken)
        .then((res) => {
          dispatch({ type: "USER", payload: { user: res.data } });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "LOGOUT" });
        });
    } else {
      dispatch({ type: "LOGOUT" });
    }

    dispatch({ type: "LOADING", payload: { isLoading: false } });
  }, [storedToken]);

  // Login handler
  const loginHandler = (token: string) => {
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN", payload: { token } });
  };

  // logout handler
  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  // update user handler
  const userHandler = (user: IUser) => {
    dispatch({ type: "USER", payload: { user } });
  };

  const contextValue: AuthContextType = {
    token: authState.token,
    isLoggedIn: authState.isLoggedIn,
    user: authState.user,
    isLoading: authState.isLoading,
    updateUser: userHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
