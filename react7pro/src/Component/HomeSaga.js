import React from 'react'
import { useDispatch } from 'react-redux'
import { getdata } from '../Redux/Action/ActionSaga';
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'

const HomeSaga = () => {

const dispatch = useDispatch();
const navigate=useNavigate();
const getApi = () =>{
  dispatch(getdata());
  navigate('../apitable')
  }

 
  return (
    <div>
      <h1>Home Page</h1>
      <Button 
             variant="success"
             onClick={getApi}>Show Api Data
      </Button>
    
    </div>
  )
}

export default HomeSaga