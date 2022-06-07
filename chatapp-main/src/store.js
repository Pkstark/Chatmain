

import {createStore} from "redux";

const intialstate = {
    count : null
}




const Reducer = (state=intialstate,action) => {

    switch (action.type) {
        case "updateusers":
            return{
                ...state,count : action.user
            }
            
    
        default:
            return state
    }
            
   
}


const store = createStore(Reducer);

export default store;