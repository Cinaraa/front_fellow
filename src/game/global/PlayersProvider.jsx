import {  useState} from "react";
import { PlayersContext } from "./PlayersContext";
import PropTypes from 'prop-types';

function PlayersProvider({ children }) {
    const [players, setPlayers] = useState(null);

    function logout() {
        setPlayers(null)
    }

    return (
        <PlayersContext.Provider value={{ players, setPlayers, logout}}>
            {children}
        </PlayersContext.Provider>
    );
    }

PlayersProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };
export default PlayersProvider;