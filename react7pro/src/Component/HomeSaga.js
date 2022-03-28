import React from 'react'
import { useDispatch } from 'react-redux'
import { getdata } from '../Redux/Action/ActionSaga';
import { useNavigate } from 'react-router'

const HomeSaga = () => {

const dispatch = useDispatch();
const navigate=useNavigate();
const getApi = () =>{
  dispatch(getdata());
  navigate('../usertable')
  }

 
  return (
    <div>
      <h1>HomeSaga</h1>
      <button onClick={getApi}>get api</button>
    </div>
  )
}

export default HomeSaga