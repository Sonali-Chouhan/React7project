import {Get_user, delete_user, update_user} from "../Type"
const initialState = {
    item: [],
  };
  export const Fromreducer = function (state = initialState, action) {
 
    switch (action.type) {
      case Get_user:
        var data=state.item
        data.push(action.payload.data)
        
        return {
        
          ...state,
          item:data,
         
        };
      case delete_user:
        var  list = state.item;
        
        list.splice(action.payload.id, 1);
        return { 
          ...state,
          item: [...list] 
        };
        case update_user:
          console.log("action.id",action.payload.id)
          console.log("action.user",action.payload.user.name)
          var items=state.item
          items.splice(action.payload.id,1,{
            name:action.payload.user.name,
            email:action.payload.user.email,
            password:action.payload.user.password
          })
         
          return {
            ...state,
            item:[...items]
            };

        default: return state
    }
}
export default Fromreducer