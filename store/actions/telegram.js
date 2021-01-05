import axios from 'axios'
export const msgLoading = () => ({
    type: "MSGS_LOADING"
  })
  
export const msgFailed = errmess => ({
  type: 'MSGS_FAILED',
  payload: errmess,
});

export const msgSuccess = msgs => ({
  type: 'MSGS_SUCCESS',
  payload: msgs,
});

export const fetchNonAnsweredMsg = () =>dispatch=> {
    dispatch(msgLoading(true));
    axios.get('http://localhost:8000/api/nonanswered')
    .then(response=> {
        dispatch(msgSuccess(response.data))
        console.log(response.data)
    })
}

export const fetchAnsweredMsg = () => dispatch=> {
    dispatch(msgLoading(true));
    axios.get('http://localhost:8000/api/answered')
    .then(response=> {
        dispatch(msgSuccess(response.data))
    })
}