import {  useState} from "react";
import { OwnersContext } from "./OwnersContext";
import PropTypes from 'prop-types';

function  OwnersProvider({ children }) {
    const [owners, setOwners] = useState([]);

    function reset() {
        setOwners([])
    }

    return (
        <OwnersContext.Provider value={{ owners, setOwners, reset}}>
            {children}
        </OwnersContext.Provider>
    );
    }

    OwnersProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };
export default OwnersProvider;