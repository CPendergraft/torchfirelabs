import { combineReducers } from 'redux'
import {
    SELECT_ILLUSTRATIONS, INVALIDATE_ILLUSTRATIONS,
    REQUEST_ILLUSTRATIONS, RECEIVE_ILLUSTRATIONS
} from '../actions'
import audioStore from './audioStore';
import caseStore from './caseStore';

const selectedIllustrations = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_ILLUSTRATIONS:
            return action.illustrations
        default:
            return state
    }
}
const selectItem = (state , action) => {

    return {...state, selectedItem: action.selectedItem}
}
const selectSection = (state , action) => {

    return {...state, selectedSection: action.selectedSection}
}

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_ILLUSTRATIONS:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_ILLUSTRATIONS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_ILLUSTRATIONS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsByillustrations = (state = { }, action) => {
    switch (action.type) {
        case INVALIDATE_ILLUSTRATIONS:
        case RECEIVE_ILLUSTRATIONS:
        case REQUEST_ILLUSTRATIONS:
            return {
                ...state,
                [action.illustrations]: posts(state[action.illustrations], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsByillustrations,
    selectItem,
    selectedIllustrations,
    selectSection,
    audio: audioStore,
    caseStore:caseStore
})

export default rootReducer