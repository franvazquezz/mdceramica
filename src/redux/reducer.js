const initialState = {
  allStudents: [],
  studentsName: [],
  allStudentsCalendar: [],
  currentStudent: null,
  currentClass: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return {
        ...state,
        allStudents: action.payload,
        allStudentsCalendar: action.payload,
      };
    case "POST_STUDENT":
      return {
        ...state,
        allStudents: [...state.allStudents, action.payload],
      };
    case "GET_STUDENT_BY_ID":
      return {
        ...state,
        currentStudent: action.payload, // No es necesario usar [action.payload]
      };
    case "PUT_STUDENT":
      return {
        currentStudent: action.payload,
      };
    case "POST_CLASS":
      return {
        currentStudent: action.payload,
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        allStudents: [...state.allStudents, action.payload],
        studentsName: [...state.studentsName, action.payload],
      };
    case "GET_CLASS":
      return {
        currentClass: action.payload,
      };
    case "PUT_CLASS":
      return {
        currentStudent: action.payload,
      };
    case "DELETE_CLASS":
      return {
        currentStudent: action.payload,
      };
    case "GET_STUDENT_BY_NAME":
      return {
        ...state,
        studentsName: [...action.payload],
      };
    case "REMOVE_FINDER":
      return {
        studentsName: [],
      };
    default:
      return state;
  }
};

export default reducer;
