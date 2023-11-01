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
		timetable: "",
		className: "",
		classDay: "",
		classPrice: "",
		classPaid: false,
		ovenPrice: "",
		ovenPaid: false,
		materialName: "",
		materialPrice: "",
		materialPaid: false,
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setNewStudent((prevStudent) => ({
			...prevStudent,
			[name]: value,
		}));
	};
	const handleChangeCheckbox = () => {
		setNewStudent((prevClass) => ({
			...prevClass,
			classPaid: !prevClass.classPaid,
		}));
	};
	const handleChangeCheckboxOven = () => {
		setNewStudent((prevClass) => ({
			...prevClass,
			ovenPaid: !prevClass.ovenPaid,
		}));
	};
	const handleChangeCheckboxMaterial = () => {
		setNewStudent((prevClass) => ({
			...prevClass,
			materialPaid: !prevClass.materialPaid,
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
			timetable: "",
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
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-red-gradient">
			<form
				onSubmit={handleSubmit}
				className="min-h-screen lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/3 rounded-lg p-2">
				<h1 className="text-center">Estudiante</h1>
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
							type="text"
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
							<option>10:00</option>
							<option>16:00</option>
							<option>18:30</option>
						</select>
					</label>
				</div>
				<div className="grid grid-cols-1 gap-2">
					<h1 className="text-center">Clase</h1>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Nombre:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="text"
							name="className"
							value={newStudent.className}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Día:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="date"
							name="classDay"
							value={newStudent.classDay}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Precio:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="number"
							name="classPrice"
							value={newStudent.classPrice}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Pagada
						<div className=" flex flex-row items-center justify-center w-1/2">
							<input
								className="shadow-sm text-end rounded-[20px] p-2"
								type="checkbox"
								name="classPaid"
								value={newStudent.classPaid}
								onChange={handleChangeCheckbox}
							/>
						</div>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Precio del horno:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="text"
							name="ovenPrice"
							value={newStudent.ovenPrice}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Pagado
						<div className=" flex flex-row items-center justify-center w-1/2">
							<input
								className="shadow-sm text-end rounded-[20px] p-2"
								type="checkbox"
								name="ovenPaid"
								value={newStudent.ovenPaid}
								onChange={handleChangeCheckboxOven}
							/>
						</div>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Nombre de los materiales:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="textarea"
							name="materialName"
							value={newStudent.materialName}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Precio de materiales:
						<input
							className="shadow-sm text-end rounded-[20px] p-2"
							type="text"
							name="materialPrice"
							value={newStudent.materialPrice}
							onChange={handleChange}
						/>
					</label>
					<label className="flex flex-row  items-center justify-between px-[10px]">
						Pagados
						<div className=" flex flex-row items-center justify-center w-1/2">
							<input
								className="shadow-sm text-end rounded-[20px] p-2"
								type="checkbox"
								name="materialPaid"
								value={newStudent.materialPaid}
								onChange={handleChangeCheckboxMaterial}
							/>
						</div>
					</label>
				<a href="/" className="text-center cursor-pointer" onClick={handleSubmit}>
					Enviar
				</a>
				</div>
			</form>
			<a href="/">Volver</a>
		</div>
	);
};

export default PostStudent;
