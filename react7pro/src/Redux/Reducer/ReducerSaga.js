import {Get_data} from "../Type"
const initialState = {
    Data: [],
  };
  export const sagaReducer = function (state = initialState, action) {
 
    switch (action.type) {
      case Get_data:
        
        return {
        
          ...state,
          Data: [...state.Data, action.payload],
         
        };
        default: return state
    }
}
export default sagaReducer