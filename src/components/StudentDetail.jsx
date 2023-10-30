import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getStudentById, putStudent, postClass} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();
	const [editToggle, setEditToggle] = useState(false);
	const [editClassToggle, setEditClassToggle] = useState(false);
	const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		telephone: "",
		day: "",
		timetable: "",
	});
	const [newClass, setNewClass] = useState({
		className: "",
		classDay: "",
		classPrice: "",
		classPaid: false,
		ovenPrice: "",
		materialName: "",
		materialPrice: "",
	});
	const {currentStudent} = useSelector((state) => state);
	useEffect(() => {
		dispatch(getStudentById(id));
	}, [dispatch]);
	useEffect(() => {
		setNewStudent(currentStudent);
	}, [currentStudent]);
	const handleEdit = () => {
		setEditToggle(!editToggle);
	};

	const handleEditClass = () => {
		setEditClassToggle(!editClassToggle);
	};

	const handleSubmit = () => {
		setEditToggle(false);
		dispatch(putStudent(id, newStudent));
		setNewStudent(currentStudent);
	};

	const handleSubmitClass = () => {
		setEditClassToggle(false);
		dispatch(postClass(id, newClass)); // Asegúrate de que id y newClass sean los parámetros correctos
		setNewClass({
			className: "",
			classDay: "",
			classPrice: "",
			classPaid: false,
			ovenPrice: "",
			materialName: "",
			materialPrice: "",
		}); // Restablece el estado del formulario después de enviar
	};

	const handleChange = (e) => {
		setNewStudent((prevStudent) => ({
			...prevStudent,
			[e.target.name]: e.target.value,
		}));
	};
	const handleChangeClass = (e) => {
		setNewClass((prevClass) => ({
			...prevClass,
			[e.target.name]: e.target.value,
		}));
	};
	const handleChangeCheckbox = () => {
		setNewClass((prevClass) => ({
			...prevClass,
			classPaid: !prevClass.classPaid,
		}));
		console.log(newClass);
	};
	return (
		<div className="min-h-screen flex flex-col justify-center">
			<div className="min-h-[600px] flex flex-col items-center justify-between rounded-[20px] shadow-md bg-sky-50">
				<a className="cursor-pointer" onClick={handleEdit}>
					Editar datos
				</a>
				{!editToggle ? (
					<div>
						<ul>
							<li>{currentStudent.name}</li>
							<li>{currentStudent.birthday}</li>
							<li>{currentStudent.telephone}</li>
							<li>{currentStudent.day}</li>
							<li>{currentStudent.timetable}</li>
						</ul>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="min-h-screen lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/3 rounded-lg p-2">
						<a className="cursor-pointer" onClick={handleEdit}>
							Cancelar
						</a>
						<h1 className="text-center">Estudiante</h1>
						<div className="grid grid-cols-1 gap-2">
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Nombre
								<input className="shadow-sm" type="text" name="name" value={newStudent.name} onChange={handleChange} />
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Cumpleaños:
								<input
									className="shadow-sm"
									type="date"
									name="birthday"
									value={newStudent.birthday}
									onChange={handleChange}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Teléfono:
								<input
									className="shadow-sm"
									type="text"
									name="telephone"
									value={newStudent.telephone}
									onChange={handleChange}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Día que viene:
								<input className="shadow-sm" type="text" name="day" value={newStudent.day} onChange={handleChange} />
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Horario:
								<input
									className="shadow-sm"
									type="text"
									name="timetable"
									value={newStudent.timetable}
									onChange={handleChange}
								/>
							</label>
						</div>
						<a href={`/student/${id}`} className="text-center cursor-pointer" onClick={handleSubmit}>
							Aplicar
						</a>
					</form>
				)}

				{!editClassToggle ? (
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-center">
						{currentStudent.classes &&
							currentStudent.classes.map((item, index) => (
								<div key={index}>
									<ul>
										<li>{item.className}</li>
										<li>{item.classPrice}</li>
										<li>{item.classDay}</li>
										<li>{item.classPaid ? <p>Pagada</p> : <p>No pagada</p>}</li>
										<li>{item.ovenPrice}</li>
										<li>{item.materialName}</li>
										<li>{item.materialPrice}</li>
									</ul>
								</div>
							))}
					</div>
				) : (
					<form onSubmit={handleSubmitClass}>
						<div className="grid grid-cols-1 gap-2">
							<h1 className="text-center">Clase</h1>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Nombre:
								<input
									className="shadow-sm"
									type="text"
									name="className"
									value={newClass.className}
									onChange={handleChangeClass}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Día:
								<input
									className="shadow-sm"
									type="date"
									name="classDay"
									value={newClass.classDay}
									onChange={handleChangeClass}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Precio:
								<input
									className="shadow-sm"
									type="text"
									name="classPrice"
									value={newClass.classPrice}
									onChange={handleChangeClass}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Pagada
								<input
									className="shadow-sm"
									type="checkbox"
									name="classPaid"
									value={newClass.classPaid}
									onChange={handleChangeCheckbox}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Precio del horno:
								<input
									className="shadow-sm"
									type="text"
									name="ovenPrice"
									value={newClass.ovenPrice}
									onChange={handleChangeClass}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Nombre del material:
								<input
									className="shadow-sm"
									type="textarea"
									name="materialName"
									value={newClass.materialName}
									onChange={handleChangeClass}
								/>
							</label>
							<label className="flex flex-row  items-center justify-between px-[10px]">
								Precio del material:
								<input
									className="shadow-sm"
									type="text"
									name="materialPrice"
									value={newClass.materialPrice}
									onChange={handleChangeClass}
								/>
							</label>
						</div>
						<a href={`/student/${id}`} className="text-center cursor-pointer" onClick={handleSubmitClass}>
							Crear
						</a>
					</form>
				)}
				<a className="cursor-pointer" onClick={handleEditClass}>
					Agregar Clase
				</a>
			</div>
		</div>
	);
};

export default StudentDetail;
