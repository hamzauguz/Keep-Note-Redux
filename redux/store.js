import { createStore, combineReducers } from 'redux'
import inputReducer from '../redux/reducers/inputReducer'

const reducers = combineReducers({
  input: inputReducer,
})
const store = createStore(reducers)

export default store
