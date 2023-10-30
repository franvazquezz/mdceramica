import axios from "axios";
const URL = 'http://localhost:3001'

export const getStudents = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}/students`)
      dispatch({ type: 'GET_STUDENTS', payload: data });
    }
  } catch (error) {
    console.log(error);
  }
}

export const postStudent = (student) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.post(`${URL}/students`, student)
      dispatch({ type: 'POST_STUDENT', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const getStudentById = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}/students/${id}`);
      dispatch({ type: 'GET_STUDENT_BY_ID', payload: data })
    }
  } catch (error) {
    console.log(error);

  }
}

export const putStudent = (id, udpatedStudent) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.put(`${URL}/students/${id}`, udpatedStudent)
      dispatch({ type: 'PUT_STUDENT', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const postClass = (id, newClass) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.post(`${URL}/students/${id}/classes`, newClass)
      dispatch({ type: 'POST_CLASS', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const getStudentDays = () => {
  return {
    type: 'GET_STUDENT_DAYS',
    payload: studentsByDay
  }
}