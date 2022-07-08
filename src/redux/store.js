import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers/TiendaReducer";



const store = createStore(reducer)



export default store;