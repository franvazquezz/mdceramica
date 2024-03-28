"use client";
import {postStudent} from "../../redux/actions";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import "../../App.css";
import { Link } from "react-router-dom";

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await dispatch(postStudent(newStudent));
			Swal.fire({
				title: "Bien hecho!",
				text: "Alumno creado correctamente!",
				icon: "success",
			});
			setNewStudent({
				name: "",
				birthday: "",
				telephone: "",
				day: "",
				timetable: ""
			});
			return response
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-carta-100 text-[#ab58b8] font-semibold">
			<form
				onSubmit={handleSubmit}
				className="min-h-screen lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/3 rounded-lg p-2">
				<div className="flex flex-row  items-center justify-evenly">
					<Link to="/" className="p-2 rounded-[20px] bg-transparent border-2 border-carta-100 shadow-md">
						Volver
					</Link>
					<h1 className="text-2xl text-center">Estudiante</h1>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Nombre
						<input
							className="text-end text-black outline-none rounded-[20px] shadow-lg  border border-yellow-200 p-2"
							type="text"
							name="name"
							value={newStudent.name}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Cumpleaños:
						<input
							className="text-end text-black outline-none rounded-[20px] shadow-lg  border border-yellow-200 p-2"
							type="date"
							name="birthday"
							value={newStudent.birthday}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Teléfono:
						<input
							className="text-end text-black outline-none rounded-[20px] shadow-lg  border border-yellow-200 p-2"
							type="text"
							name="telephone"
							value={newStudent.telephone}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Día que viene:
						<select
							className="text-end text-black outline-none rounded-[20px] shadow-lg  border border-yellow-200 p-2 w-1/2"
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
							className="text-end text-black outline-none rounded-[20px] shadow-lg  border border-yellow-200 p-2 w-1/2"
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
				<div className="flex flex-col items-center justify-center gap-2">
					<a className="text-center cursor-pointer p-2 rounded-[20px] bg-transparent border border-yellow-200 shadow-md" onClick={handleSubmit}>
						Enviar
					</a>
				</div>
			</form>
		</div>
	);
};

export default PostStudent;
