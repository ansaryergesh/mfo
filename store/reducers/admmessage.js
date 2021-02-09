const admmessage = (state={
    visibility: false,
    type: null,
    message: null,
},action) => {
    switch (action.type){
        case 'ADM_SUCCESS_MESSAGE':
            return {
                ...state, visibility: true, type: 'success', message: action.payload,
            };
        case 'ADM_ERROR_MESSAGE':
            return {
                ...state,visibility: true, type: 'error', message: action.payload,
            };
        case 'ADM_INFO_MESSAGE':
            return {
                ...state,visibility:true, type: 'info', message: action.payload,
            }
        case 'ADM_CLOSE_MESSAGE':
            return {
                ...state, visibility: false, type: null, message: null
            };
        default:
            return state;
    }
}
export default admmessage