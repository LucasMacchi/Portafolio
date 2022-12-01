import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";

const store = createStore(
    reducers, 
    compose(
        applyMiddleware(thunk), //Este me deja manejar procesos asincronicos
    )
        
)    
    


export default store;