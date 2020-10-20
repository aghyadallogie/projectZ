import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClientsAction } from "../../store/actions/clientsActions";
import { SET_TARGET } from "../../store/actions/types";

export const ClientsList = () => {
  // const [clients, setClients] = useState([]);
  // const [userInput, setUserInput] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  const myClients = useSelector((state) => state.clients.clientsArray);

  useEffect(() => {
    dispatch(fetchClientsAction());
  }, []);

  const renderLists = () => {
    return myClients.map((client) => (
      <li
        to="clientInfos"
        key={client._id}
        onClick={() => {
          dispatch({ type: SET_TARGET, payload: client });
        }}
      >
        {client.email}
      </li>
    ));
  };

  return (
    <div className="clientsList">
      <ul>{renderLists()}</ul>
    </div>
  );
};
