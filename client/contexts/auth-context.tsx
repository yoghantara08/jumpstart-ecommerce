import { profileAPI } from "@/lib/user-api";
import { IUser } from "@/types/user-type";
import React, { useEffect, useReducer } from "react";

// AUTH CONTEXT TYPE
type AuthContextType = {
  token: string | null;
  isLoggedIn: boolean;
  user: IUser;
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
  | { type: "USER"; payload: { user: IUser } };

// AUTH REDUCER STATE TYPE
type AuthStateType = {
  token: string | null;
  isLoggedIn: boolean;
  user: IUser;
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
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    case "USER": {
      return { ...state, user: action.payload.user };
    }
    default:
      throw new Error("Invalid action");
  }
};

// Create Context API
const AuthContext = React.createContext<AuthContextType>({
  token: null,
  isLoggedIn: false,
  user: {
    _id: "",
    email: "",
    isFirstLogin: false,
    role: "",
    provider: "",
    profile: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      birthday: "",
      image: "",
    },
    createdAt: "",
    updatedAt: "",
  },
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => {},
  // eslint-disable-next-line no-unused-vars
  updateUser: (user: IUser) => {},
  logout: () => {},
});

// Context Provider
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialAuthState: AuthStateType = {
    token: null,
    isLoggedIn: false,
    user: {
      _id: "",
      email: "",
      isFirstLogin: false,
      role: "",
      provider: "",
      profile: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        country: "",
        city: "",
        address: "",
        postalCode: "",
        birthday: "",
        image: "",
      },
      createdAt: "",
      updatedAt: "",
    },
  };
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  // Check token
  let storedToken: string | null = null;
  if (typeof window !== "undefined") {
    storedToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (storedToken) {
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
    updateUser: userHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
