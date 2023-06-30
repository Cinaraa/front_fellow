import { useEffect , useState} from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from 'prop-types';


function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || "null");

    function logout() {
        setToken("null")
    }

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
    }

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };
export default AuthProvider;
