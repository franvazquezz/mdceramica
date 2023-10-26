import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getStudentById, putStudent} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();
	const [editToggle, setEditToggle] = useState(false);
	const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		telephone: "",
		day: "",
	});
	const {currentStudent} = useSelector((state) => state);
	useEffect(() => {
		dispatch(getStudentById(id));
	}, [dispatch]);
	useEffect(() => {
		setNewStudent(currentStudent);
	}, [currentStudent]);
	console.log(currentStudent);
	const handleEdit = () => {
		setEditToggle(!editToggle);
	};
	const handleSubmit = () => {
		setEditToggle(false);
		dispatch(putStudent(id, newStudent));
		setNewStudent(currentStudent);
	};

	const handleChange = (e) => {
		setNewStudent((prevStudent) => ({
			...prevStudent,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<div className="min-h-screen flex flex-col justify-center">
			<div className="min-h-[600px] flex flex-col items-center justify-between rounded-[20px] shadow-md bg-sky-50">
				<a onClick={handleEdit}>Editar datos</a>
				{!editToggle ? (
					<div>
						<p>{currentStudent.name}</p>
						<p>{currentStudent.birthday}</p>
						<p>{currentStudent.telephone}</p>
						<p>{currentStudent.day}</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="min-h-screen lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/3 rounded-lg p-2">
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
						</div>
						<a href={`/student/${id}`} className="text-center" onClick={handleSubmit}>Aplicar</a>
					</form>
				)}
				{currentStudent.classes &&
					currentStudent.classes.map((item, index) => (
						<div key={index}>
							<p>{item.className}</p>
							<p>{item.classPrice}</p>
							<p>{item.classDay}</p>
							<p>{item.classPaid ?<p>Pagada</p>:<p>No pagada</p>}</p>
							<p>{item.ovenPrice}</p>
							<p>{item.materialName}</p>
							<p>{item.materialPrice}</p>
						</div>
					))}
				<a>Agregar Clase</a>
			</div>
		</div>
	);
};

export default StudentDetail;
