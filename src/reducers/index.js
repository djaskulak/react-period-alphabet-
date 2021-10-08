import { combineReducers } from 'redux'
import connectDataReducer from './connectData'

export default combineReducers({
    connectData: connectDataReducer
})