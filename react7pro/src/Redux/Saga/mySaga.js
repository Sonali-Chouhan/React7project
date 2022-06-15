import axios from 'axios'
import { delete_user, delete_User, Get_Data,Get_data,Get_User,Get_user,update_User,update_user} from "../Type"
import { get_user,Delete_User,Updata_User} from '../Action/ActionSaga'
import { call, put, takeEvery} from 'redux-saga/effects'
function* Get_Api(){
    
    try {
        const data = yield call(axios.get,'https://jsonplaceholder.typicode.com/posts')
        yield put ({
            type: Get_data,
            payload:data
        })
        
    } catch (e) {
      console.log(e.message)
      }
    }
function* Get_Item(action){
  
    const object= yield call(get_user,action.data)
    yield put ({
        type:Get_user,
        payload:object
    })
    
  }
  function* Delete_item(action){
  
    const id= yield call(Delete_User,action.id)
    
    yield put ({
        type:delete_user,
        payload:id
    })
    
  }
  function* Update_item(action){
  
    const fun= yield call(Updata_User,action.id,action.user)
   
    yield put ({
        type:update_user,
        payload:fun,
        
    })
   
  
  }
 
 
export default function* Data_Send(){
    yield takeEvery(Get_Data,Get_Api)
    yield takeEvery(Get_User,Get_Item)
    yield takeEvery(delete_User,Delete_item)
    yield takeEvery(update_User,Update_item)
}