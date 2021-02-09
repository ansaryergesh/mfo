export const closeMessage = () => ({type: 'ADM_CLOSE_MESSAGE'})
export const successMessage = (msg) => ({type: 'ADM_SUCCESS_MESSAGE', payload: msg})
export const errorMessage = (msg) => ({type: 'ADM_ERROR_MESSAGE', payload: msg})
export const infoMessage = (msg) => ({type: 'ADM_INFO_MESSAGE', payload: msg})