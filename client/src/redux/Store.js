import rootReducer from "./reducers";
import { createStore } from "redux";


const Store = createStore(rootReducer);

export default Store;
