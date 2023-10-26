"use client"
import { postStudent } from '@/redux/actions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const PostStudent = () => {
	const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		className: "",
		classPrice: "",
		classPaid: false,
		classDay: "",
		ovenPrice: "",
		materialName: "",
		materialPrice: "",
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setNewStudent((prevStudent) => ({
			...prevStudent,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newStudent);
		dispatch(postStudent(newStudent))
	}

  return (
    <form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-2">
					<h1>Estudiante</h1>
					<label>
						Nombre:
						<input type="text" name="name" value={newStudent.name} onChange={handleChange} />
					</label>
					<label>
						Cumpleaños:
						<input type="date" name="birthday" value={newStudent.birthday} onChange={handleChange} />
					</label>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<h1>Clase</h1>
					<label>
						Nombre:
						<input type="text" name="className" value={newStudent.className} onChange={handleChange} />
				</label>
				<label>
						Día:
						<input type="date" name="classDay" value={newStudent.classDay} onChange={handleChange} />
					</label>
					<label>
						Precio:
						<input type="text" name="classPrice" value={newStudent.classPrice} onChange={handleChange} />
				</label>
				<label>
						Pagada
						<input type="checkbox" name="classPaid" value={newStudent.classPaid} onChange={handleChange} />
					</label>
					<label>
						Precio del horno:
						<input type="text" name="ovenPrice" value={newStudent.ovenPrice} onChange={handleChange} />
					</label>
					<label>
						Nombre del material:
						<input type="text" name="materialName" value={newStudent.materialName} onChange={handleChange} />
					</label>
					<label>
						Precio del material:
						<input type="text" name="materialPrice" value={newStudent.materialPrice} onChange={handleChange} />
					</label>
			</div>
			<button>Enviar</button>
			</form>
  )
}

export default PostStudent;