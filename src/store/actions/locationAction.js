export const postLocation = (payLoad) =>{
    return{
        type: 'POST_LOCATION',
        payload
    }
}
export const getLocation = (payLoad) =>{
    return{
        type: 'GET_LOCATION',
        payload
    }
}
export const deleteLocation = (payLoad) =>{
    return{
        type: 'DELETE_LOCATION',
        payload
    }
}