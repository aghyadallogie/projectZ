import { ADD_CLIENT_SUCCESS, GET_CLIENTS, SET_TARGET } from "../actions/types";

const initialState = { clientsArray: [] };

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clientsArray: action.payload,
      };
    case ADD_CLIENT_SUCCESS:
      console.log("reducer: ", action.payload);
      console.log("clientsArray: ", state.clientsArray);
      return {
        ...state,
        clientsArray: [...state.clientsArray, action.payload],
      };
    default:
      return state;
  }
};
export default clientsReducer;
