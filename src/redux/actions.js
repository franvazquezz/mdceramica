import axios from "axios";
const URL = 'https://mdceramicaback.onrender.com'
// const URL = 'http://localhost:5432'

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

export const deleteStudent = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(`${URL}/students/${id}`)
      dispatch({ type: 'DELETE_STUDENT', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const getClass = (studentId, classId) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL}/classes/${classId}`)
      dispatch({ type: 'GET_CLASS', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const putClass = (studentId, classId, updatedClass) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.put(`${URL}/students/${studentId}/classes/${classId}`, updatedClass);
      dispatch({ type: 'PUT_CLASS', payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const deleteClass = (studentId, classId) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(`${URL}/students/${studentId}/classes/${classId}`)
      dispatch({ type: 'DELETE_CLASS', payload: data })
      alert(`La clase se ha elimminado exitosamente`)
    }
  } catch (error) {
    console.log(error);
  }
}

export const getStudentByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/students?name=${name}`);
      dispatch({ type: 'GET_STUDENT_BY_NAME', payload: data });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Manejar el error 404, por ejemplo, mostrando una alerta
        alert(`No existe alumno con el nombre ${name[0].toUpperCase()+name.slice(1, name.length)}`);
      } else {
        // Para otros errores, puedes manejarlos de otra manera o mostrar un mensaje genérico
        console.error('Error en la acción getStudentByName:', error);
      }
    }
  };
};

export const removeFinder = () => {
  return {
    type: 'REMOVE_FINDER',
    payload: 'nada'
  }
}