import axios from "axios";

export const getStudents = () => {
  try { 
     return async (dispatch)=>{
        const {data} = await axios.get(`/students`)
        dispatch({type: 'GET_STUDENTS', payload: data});
     }
  } catch (error) {
     console.log(error);
  }
}

export const postStudent = (student) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.post('/students', student)
      dispatch({ type: 'POST_STUDENT', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}
