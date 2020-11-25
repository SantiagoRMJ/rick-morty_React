export const getEpisodes = (payLoad) =>{
    return{
        type: 'GET_EPISODES',
        payload
    }
}

export const putEpisodes = (payLoad) =>{
    return{
        type: 'PUT_EPISODES',
        payload
    }
}

export const deleteEpisodes = (payLoad) =>{
    return{
        type: 'DELETE_EPISODES',
        payload
    }
}