const INITIAL_STATE = []
const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [...state, action.payload]
      break

    default:
      return state
      break
  }
}

export default inputReducer
