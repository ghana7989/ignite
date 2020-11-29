

const gamesReducer = (state = {
  popular: [],
  newGames: [],
  upComing: [],
}, action) => {

  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export default gamesReducer