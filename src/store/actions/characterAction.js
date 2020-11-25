export const postCharacter = (payLoad) =>{
    return{
        type: 'POST_CHARACTERS',
        payload
    }
}

export const putCharacters = (payLoad) =>{
    return{
        type: 'PUT_CHARACTERS',
        payload
    }
}

export const deleteCharacters = (payLoad) =>{
    return{
        type: 'DELETE_CHARACTERS',
        payload
    }
}