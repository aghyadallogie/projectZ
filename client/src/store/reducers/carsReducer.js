import { GET_CARS, SET_CAR } from "../actions/types";

const initialState = { carsArray: [] };

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        carsArray: action.payload,
      };
    default:
      return state;
  }
};
export default carsReducer;
