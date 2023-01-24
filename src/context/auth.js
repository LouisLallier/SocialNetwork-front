import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { REFRESH_TOKEN } from "../variables/localStorage";

const AuthContext = createContext(null);

const getSessionToken = async (refreshToken) => {
  try {
    console.log("getSessionToken");
    return await axios.post("http://localhost:5002/api/user/session_token", {
      refreshToken,
    });
  } catch (e) {
    console.error(e);
  }
};

const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useState(
    secureLocalStorage.getItem(REFRESH_TOKEN)
  );
  const handleSetRefreshToken = (newToken) => {
    setRefreshToken(newToken);
    secureLocalStorage.setItem(REFRESH_TOKEN, newToken);
  };

  return [refreshToken, handleSetRefreshToken];
};

const AuthContextProvider = ({ children }) => {
  const [sessionToken, setSessionToken] = useState(null);
  const [refreshToken, setRefreshToken] = useRefreshToken();

  useEffect(() => {
    if (refreshToken && !sessionToken) {
      getSessionToken(refreshToken).then((res) => {
        console.log("res", res);
        setSessionToken(res.data.sessionToken);
      });
    }
  }, [refreshToken, sessionToken]);

  return (
    <AuthContext.Provider
      value={{
        sessionToken,
        setSessionToken,
        setRefreshToken,
        isAuth: !!sessionToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
