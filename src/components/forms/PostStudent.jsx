"use client";
import {postStudent} from "../../redux/actions";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../../App.css";

const PostStudent = () => {
	const dispatch = useDispatch();
	const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		telephone: "",
		day: "",
		timetable: ""
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
			dispatch(postStudent(newStudent));
			setNewStudent({
				name: "",
				birthday: "",
				telephone: "",
				day: "",
				timetable: ""
			});
	};
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-red-gradient">
			<form
				onSubmit={handleSubmit}
				className="min-h-screen lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/3 rounded-lg p-2">
				<div className="flex flex-row  items-center justify-evenly">
					<a href="/" className="p-3 rounded-[20px] shadow-md">
						Volver
					</a>
					<h1 className="text-2xl text-center">Estudiante</h1>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Nombre
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="text"
							name="name"
							value={newStudent.name}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Cumpleaños:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="date"
							name="birthday"
							value={newStudent.birthday}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Teléfono:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="number"
							name="telephone"
							value={newStudent.telephone}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Día que viene:
						<select
							className="shadow-sm text-end rounded-[20px] p-2 w-1/2"
							name="day"
							value={newStudent.day}
							onChange={handleChange}>
							<option hidden>Seleccione un día</option>
							<option>Lunes</option>
							<option>Martes</option>
							<option>Miércoles</option>
							<option>Jueves</option>
							<option>Viernes</option>
							<option>Sábado</option>
						</select>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Horario:
						<select
							className="shadow-sm text-end rounded-[20px] p-2 w-1/2"
							name="timetable"
							value={newStudent.timetable}
							onChange={handleChange}>
							<option hidden>Seleccione horario</option>
							<option>10:00</option>
							<option>16:00</option>
							<option>18:30</option>
						</select>
					</label>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<a className="text-center cursor-pointer" onClick={handleSubmit}>
						Enviar
					</a>
				</div>
			</form>
		</div>
	);
};

export default PostStudent;
