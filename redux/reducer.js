
const initialState = {
  allStudents: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) { 
    case 'GET_STUDENTS':
      return {

        ...state,
        allStudents: action.payload
      }
    case 'POST_STUDENT':
      return {
        ...state,
        allStudents: [...state.allStudents, action.payload]
      }
    default:
      return state;
   }
}

export default reducer;