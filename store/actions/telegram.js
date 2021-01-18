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

export const msgLoadingAns = () => ({
  type: "MSGS_LOADING_ANS"
})

export const msgFailedAns = errmess => ({
  type: 'MSGS_FAILED_ANS',
  payload: errmess,
});

export const msgSuccessAns = msgs => ({
  type: 'MSGS_SUCCESS_ANS',
  payload: msgs,
});


export const fetchNonAnsweredMsg = () =>dispatch=> {
    dispatch(msgLoading(true));
    axios.get('https://api.money-men.kz/api/nonanswered')
    .then(response=> {
        dispatch(msgSuccess(response.data))
    })
}

export const fetchAnsweredMsg = () => dispatch=> {
    dispatch(msgLoadingAns(true));
    axios.get('https://api.money-men.kz/api/answered')
    .then(response=> {
        dispatch(msgSuccessAns(response.data))
    })
}