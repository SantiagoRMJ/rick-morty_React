const initialState = {
    characters : []
}

function CharacterReducer(state = initialState, action){
    switch(action.type){
        case 'POST_CHARACTERS':
            return state.characters.push(action.payLoad)
        break;
        case  'PUT_CHARACTERS':
            const filter = state.characters.filter(
                character => character.id !== action.payLoad.id)
                return filter.push(action.payLoad)
        break;
        case 'DELETE_CHARACTERS':  
            return state.characters.filter(
                character => character.id !== action.payLoad.id)     
    }

    return state
}

export default CharacterReducer