import { createContext,useState } from "react";
import PropTypes from 'prop-types';

export const SessionContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };