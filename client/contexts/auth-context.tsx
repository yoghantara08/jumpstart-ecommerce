import React, { useEffect, useReducer } from "react";

// AUTH CONTEXT TYPE
type AuthContextType = {
  token: string | null;
  isLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => void;
  logout: () => void;
};

// AUTH REDUCER ACTION TYPE
type AuthActionType =
  | { type: "LOGIN"; payload: { token: string } }
  | { type: "LOGOUT" };

// AUTH REDUCER STATE TYPE
type AuthStateType = {
  token: string | null;
  isLoggedIn: boolean;
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
    default:
      throw new Error("Invalid action");
  }
};

// Create Context API
const AuthContext = React.createContext<AuthContextType>({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Context Provider
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialAuthState: AuthStateType = {
    token: null,
    isLoggedIn: false,
  };
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch({ type: "LOGIN", payload: { token: storedToken } });
    }
  }, []);

  const loginHandler = (token: string) => {
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN", payload: { token } });
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  const contextValue: AuthContextType = {
    token: authState.token,
    isLoggedIn: authState.isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
