import axios from 'axios'
import { Get_Data,Get_data} from "../Type"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
function* Get_Api(){
    
    try {
        const data = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
        yield put ({
            type: Get_data,
            payload:data
        })
        
    } catch (e) {
      console.log(e.message)
      }
    }

export default function* Data_Send(){
    yield takeEvery(Get_Data,Get_Api)
}