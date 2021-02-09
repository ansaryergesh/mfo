import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { useDispatch } from 'react-redux';
const mapStateToProps =({
  admmessage: {visibility,type,message}
}) => ({
  visibility,
  type,
  message
})

const Flash = ({visibility,type,message}) => {
  useEffect(() => {
    const close =() => {
      if(message) {
        setTimeout(() => {
          dispatch({type: 'ADM_CLOSE_MESSAGE'})
        },3000)
      }
    }

    close()
  },[])
  const dispatch = useDispatch();
  return (
    visibility && <div className={`alertt alertt-${type}`}>
      <span className="close" onClick={() => dispatch({type: 'ADM_CLOSE_MESSAGE'})}><strong title='Закрыть'>X</strong></span>
      <p>{message}</p>
    </div>
  )
}

export default (connect(mapStateToProps,null)(Flash));