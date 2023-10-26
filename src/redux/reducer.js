
const initialState = {
  allStudents: [],
  currentStudent: []
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
    case 'GET_STUDENT_BY_ID':
      return {
        currentStudent: action.payload
      }
    case 'PUT_STUDENT':
      return {
        currentStudent: action.payload
      }
    default:
      return state;
   }
}

export default reducer;