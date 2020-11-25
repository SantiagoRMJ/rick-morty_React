import {combineReducers} from 'redux';
import CharacterReducer from './characterRed';
import LocationReducer from './locationRed';
import EpisodesReducer from './episodesRed';

const rootRecucers = combineReducers({
    CharacterReducer,
    LocationReducer,
    EpisodesReducer

});

export default rootRecucers;