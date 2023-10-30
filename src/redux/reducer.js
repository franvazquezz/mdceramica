
const initialState = {
  allStudents: [],
  allStudentsCalendar: [],
  studentsByDay: {
		lunes: [],
		martes: [],
		miercoles: [],
		jueves: [],
		viernes: [],
		sabado: [],
	},
  currentStudent: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) { 
    case 'GET_STUDENTS':
      return {
        ...state,
        allStudents: action.payload, 
        allStudentsCalendar: action.payload
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
    case 'POST_CLASS':
      return {
        currentStudent: action.payload
      }
    case 'GET_STUDENT_DAYS':
      const orderByDay = () => {
        state.allStudentsCalendar.forEach((student) => {
          student.day === "Lunes" && studentsByDay.lunes.push(student);
          student.day === "Martes" && studentsByDay.martes.push(student);
          student.day === "Miércoles" && studentsByDay.miercoles.push(student);
          student.day === "Jueves" && studentsByDay.jueves.push(student);
          student.day === "Viernes" && studentsByDay.viernes.push(student);
          student.day === "Sábado" && studentsByDay.sabado.push(student);
        });
      };
      orderByDay();
      return {
      }
    default:
      return state;
   }
}

export default reducer;