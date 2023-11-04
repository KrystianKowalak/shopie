import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers"

export const GlobalState = createContext();
const { Provider } = GlobalState;

export const useGlobalState = () => useContext(GlobalState);

export default function StoreProvider(props) {
  const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};


