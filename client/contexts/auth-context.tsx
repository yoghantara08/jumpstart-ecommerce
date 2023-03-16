import React, { useEffect, useReducer } from "react";

// AUTH CONTEXT TYPE
type AuthContextType = {
  token: string | null;
  isLoggedIn: boolean;
  isFirstLogin: boolean;
  logout: () => void;
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => void;
  // eslint-disable-next-line no-unused-vars
  firstLogin: (condition: boolean) => void;
};

// AUTH REDUCER ACTION TYPE
type AuthActionType =
  | { type: "LOGIN"; payload: { token: string } }
  | { type: "LOGOUT" }
  | { type: "FIRST_LOGIN"; payload: { isFirstLogin: boolean } };

// AUTH REDUCER STATE TYPE
type AuthStateType = {
  token: string | null;
  isLoggedIn: boolean;
  isFirstLogin: boolean;
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
    case "FIRST_LOGIN":
      return {
        ...state,
        isFirstLogin: action.payload.isFirstLogin,
      };
    default:
      throw new Error("Invalid action");
  }
};

// Create Context API
const AuthContext = React.createContext<AuthContextType>({
  token: null,
  isLoggedIn: false,
  isFirstLogin: false,
  login: () => {},
  logout: () => {},
  firstLogin: () => {},
});

// Context Provider
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialAuthState: AuthStateType = {
    token: null,
    isLoggedIn: false,
    isFirstLogin: false,
  };
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  let storedToken: string | null = null;
  if (typeof window !== "undefined") {
    storedToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (storedToken) {
      dispatch({ type: "LOGIN", payload: { token: storedToken } });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, [storedToken]);

  const loginHandler = (token: string) => {
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN", payload: { token } });
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  const firstLoginHandler = (condition: boolean) => {
    dispatch({ type: "FIRST_LOGIN", payload: { isFirstLogin: condition } });
  };

  const contextValue: AuthContextType = {
    token: authState.token,
    isLoggedIn: authState.isLoggedIn,
    isFirstLogin: authState.isFirstLogin,
    login: loginHandler,
    logout: logoutHandler,
    firstLogin: firstLoginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
