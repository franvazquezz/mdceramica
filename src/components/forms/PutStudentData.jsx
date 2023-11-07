import React, {useEffect} from "react";
import {putStudent} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const PutStudentData = ({newStudent, setNewStudent, handleEdit, handleChange, id}) => {
	const dispatch = useDispatch();
	const {currentStudent} = useSelector((state) => state);

	useEffect(() => {
		setNewStudent(currentStudent);
	}, [currentStudent]);

	const handleSubmit = () => {
		dispatch(putStudent(id, newStudent));
		setNewStudent(currentStudent);
	};
	return (
		<form onSubmit={handleSubmit} className="lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/2 rounded-lg p-2">
			<a className="cursor-pointer text-center" onClick={handleEdit}>
				Cancelar
			</a>
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
			<a className="text-center cursor-pointer" onClick={handleSubmit}>
				Aplicar
			</a>
		</form>
	);
};

export default PutStudentData;
