"use client";
import {postStudent} from "../../redux/actions";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const PostStudent = () => {
	const dispatch = useDispatch();
	const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		telephone: "",
		day: "",
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
	const handleChangeCheckbox = () => {
		setNewStudent((prevStudent) => ({
			...prevStudent,
			classPaid: !prevStudent.classPaid,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newStudent);
		dispatch(postStudent(newStudent));
		setNewStudent({
			name: "",
			birthday: "",
			telephone: "",
			day: "",
			className: "",
			classPrice: "",
			classPaid: false,
			classDay: "",
			ovenPrice: "",
			materialName: "",
			materialPrice: "",
		});
	};
	console.log(newStudent);
	return (
		<div className="min-h-screen flex items-center justify-evenly">
			<form onSubmit={handleSubmit} className="min-h-screen lg:min-h-1/2 grid grid-cols-1 bg-slate-50 w-11/12 lg:w-1/3">
				<h1 className="text-center">Estudiante</h1>
				<div className="grid grid-cols-1 gap-2">
					<label className="flex flex-row justify-between px-[10px]">
						Nombre:
						<input type="text" name="name" value={newStudent.name} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Cumpleaños:
						<input type="date" name="birthday" value={newStudent.birthday} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Teléfono:
						<input type="text" name="telephone" value={newStudent.telephone} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Día que viene:
						<input type="text" name="day" value={newStudent.day} onChange={handleChange} />
					</label>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<h1 className="text-center">Clase</h1>
					<label className="flex flex-row justify-between px-[10px]">
						Nombre:
						<input type="text" name="className" value={newStudent.className} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Día:
						<input type="date" name="classDay" value={newStudent.classDay} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Precio:
						<input type="text" name="classPrice" value={newStudent.classPrice} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Pagada
						<input type="checkbox" name="classPaid" value={newStudent.classPaid} onChange={handleChangeCheckbox} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Precio del horno:
						<input type="text" name="ovenPrice" value={newStudent.ovenPrice} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Nombre del material:
						<input type="textarea" name="materialName" value={newStudent.materialName} onChange={handleChange} />
					</label>
					<label className="flex flex-row justify-between px-[10px]">
						Precio del material:
						<input type="text" name="materialPrice" value={newStudent.materialPrice} onChange={handleChange} />
					</label>
				</div>
				<button className="text-center">Enviar</button>
			</form>
		</div>
	);
};

export default PostStudent;
