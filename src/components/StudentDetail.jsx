import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getStudentById, putStudent, postClass, deleteStudent} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();
	const [loading, setLoading] = useState(true);
	const [editToggle, setEditToggle] = useState(false);
	// const [editClassToggle, setEditClassToggle] = useState(false);
	const [addClassToggle, setAddClassToggle] = useState(false);
	const [editDelete, setEditDelete] = useState(false);
	let moneyToPay = {
		number: 0,
		class: 0,
		oven: 0,
		materials: 0,
	};
	let classesIndex = 0;
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
		const fetchData = async () => {
			try {
				setLoading(true);
				await dispatch(getStudentById(id));
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		fetchData();
	}, [dispatch, id]);

	useEffect(() => {
		setNewStudent(currentStudent);
	}, [currentStudent]);

	const handleEdit = () => {
		setEditToggle(!editToggle);
	};

	const handleAddClass = () => {
		setAddClassToggle(!addClassToggle);
	};

	const handleSubmit = () => {
		setEditToggle(false);
		dispatch(putStudent(id, newStudent));
		setNewStudent(currentStudent);
	};

	const handleSubmitClass = () => {
		setAddClassToggle(false);
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
	};
	const handleChangeCheckboxOven = () => {
		setNewClass((prevClass) => ({
			...prevClass,
			ovenPaid: !prevClass.ovenPaid,
		}));
	};
	const handleChangeCheckboxMaterial = () => {
		setNewClass((prevClass) => ({
			...prevClass,
			materialPaid: !prevClass.materialPaid,
		}));
	};
	const handleDelete = () => {
		dispatch(deleteStudent(id));
	};
	const handleDeleteSure = () => {
		setEditDelete(!editDelete);
	};
	// const handleEditClass = () => {
	// 	setEditClassToggle(!editClassToggle);
	// };
	return (
		<main>
			{loading ? (
				<p>Cargando alumno...</p>
			) : (
				<div className="min-h-screen flex flex-col justify-evenly items-center bg-red-gradient p-5">
					<a className="text-center cursor-pointer" onClick={handleDeleteSure}>
						<DeleteIcon />
					</a>
					{editDelete && (
						<div>
							<p>{`Estás seguro de eliminar a ${currentStudent.name}`}?</p>
							<div className="flex flex-row items-center justify-evenly">
								<a href="/" className="text-center cursor-pointer" onClick={handleDelete}>
									Si
								</a>
								<a className="text-center cursor-pointer" onClick={handleDeleteSure}>
									No
								</a>
							</div>
						</div>
					)}
					<p className="text-3xl text-center">{currentStudent.name} </p>
					<div className="min-h-[600px] w-full lg:w-2/3 flex flex-col items-center justify-evenly rounded-[20px] shadow-md">
						{!editToggle ? (
							<ul className="min-h-[200px] min-w-[300px] flex flex-col p-4 justify-evenly">
								<p className="text-xl text-center pb-[10px]">
									Datos{" "}
									<a className="cursor-pointer" onClick={handleEdit}>
										<EditIcon />
									</a>
								</p>
								<li className="flex flex-row justify-between">
									Cumpleaños:{" "}
									<p>
										{`${currentStudent.birthday.slice(8, 10)}/${currentStudent.birthday.slice(
											5,
											7
										)}/${currentStudent.birthday.slice(0, 4)}`}
									</p>
								</li>
								<li className="flex flex-row justify-between">
									Teléfono: <p>{currentStudent.telephone}</p>
								</li>
								<li className="flex flex-row justify-between">
									Día que viene: <p>{currentStudent.day}</p>
								</li>
								<li className="flex flex-row justify-between">
									Horario: <p>{currentStudent.timetable}</p>
								</li>
							</ul>
						) : (
							<form
								onSubmit={handleSubmit}
								className="lg:min-h-1/2 grid grid-cols-1 w-full bg-gradient lg:w-1/2 rounded-lg p-2">
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
											<option>Miercoles</option>
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
								<a href={`/student/${id}`} className="text-center cursor-pointer" onClick={handleSubmit}>
									Aplicar
								</a>
							</form>
						)}
						<div className="grid grid-cols-1">
							{!addClassToggle ? (
								<div>
									<p className="text-center text-2xl">Clases</p>
									<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-center place-content-center">
										{currentStudent.classes &&
											currentStudent.classes.map((item, index) => (
												<div key={index}>
													<div className="flex flex-row justify-between">
														<p className="opacity-0">{(classesIndex += index)}</p>
														<p className="text-xl text-center">{item.className}</p>
														{/* <a className="text-center cursor-pointer"  onClick={handleEditClass}><EditIcon/></a> */}
													</div>
													<ul className="grid grid-cols-1">
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
									<div className="flex flex-col justify-between">
										<p className="text-2xl text-center">Resumen</p>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">Clases hechas: </p>
											<p>{classesIndex}</p>
										</div>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">Clases pagadas: </p>
											<p>
												{currentStudent.classes.reduce((total, clase) => {
													if (clase.classPaid) {
														moneyToPay.number += 1;
													}
													return moneyToPay.number;
												}, 0)}
											</p>
										</div>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">{`Clases por pagar (${classesIndex - moneyToPay.number}) : `}</p>
											<p>
												{currentStudent.classes.reduce((total, clase) => {
													if (!clase.classPaid) {
														moneyToPay.class += parseInt(clase.classPrice);
													}
													return `$${moneyToPay.class}`;
												}, 0)}
											</p>
										</div>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">Hornos por pagar: </p>
											<p>
												{currentStudent.classes.reduce((total, clase) => {
													if (!clase.ovenPaid) {
														moneyToPay.oven += parseInt(clase.ovenPrice);
													}
													return `$${moneyToPay.oven}`;
												}, 0)}
											</p>
										</div>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">Materiales por pagar: </p>
											<p>
												{currentStudent.classes.reduce((total, clase) => {
													if (!clase.materialPaid) {
														let splitted = clase.materialPrice.split(",");
														for (let i = 0; i < splitted.length; i++) {
															moneyToPay.materials += parseInt(splitted[i]);
														}
													}
													return `$${moneyToPay.materials}`;
												}, 0)}
											</p>
										</div>
										<div className="flex flex-row justify-between px-6">
											<p className="text-left">Total por pagar: </p>
											<p>${moneyToPay.class + moneyToPay.oven + moneyToPay.materials}</p>
										</div>
									</div>
								</div>
							) : (
								<form onSubmit={handleSubmitClass}>
									<div className="grid grid-cols-1 gap-2">
										<h1 className="text-center">Clase</h1>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Nombre:
											<input
												className="shadow-sm text-end rounded-[20px] p-2"
												type="text"
												name="className"
												value={newClass.className}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Día:
											<input
												className="shadow-sm text-end rounded-[20px] p-2"
												type="date"
												name="classDay"
												value={newClass.classDay}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Precio:
											<input
												className="shadow-sm text-end rounded-[20px] p-2"
												type="number"
												name="classPrice"
												value={newClass.classPrice}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Pagada
											<div className=" flex flex-row items-center justify-center">
												<input
													className="shadow-sm text-end rounded-[20px] p-2"
													type="checkbox"
													name="classPaid"
													value={newClass.classPaid}
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
												value={newClass.ovenPrice}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Pagado
											<div className=" flex flex-row items-center justify-center">
												<input
													className="shadow-sm text-end rounded-[20px] p-2"
													type="checkbox"
													name="ovenPaid"
													value={newClass.ovenPaid}
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
												value={newClass.materialName}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Precio de materiales:
											<input
												className="shadow-sm text-end rounded-[20px] p-2"
												type="text"
												name="materialPrice"
												value={newClass.materialPrice}
												onChange={handleChangeClass}
											/>
										</label>
										<label className="flex flex-row  items-center justify-between px-[10px]">
											Pagados
											<div className=" flex flex-row items-center justify-center">
												<input
													className="shadow-sm text-end rounded-[20px] p-2"
													type="checkbox"
													name="materialPaid"
													value={newClass.materialPaid}
													onChange={handleChangeCheckboxMaterial}
												/>
											</div>
										</label>
									</div>
									<div className="flex flex-row items-center justify-evenly">
										<a
											className="text-center cursor-pointer flex flex-row items-center	justify-center pt-2"
											onClick={handleAddClass}>
											Volver
										</a>
										<a
											href={`/student/${id}`}
											className="text-center cursor-pointer flex flex-row items-center	justify-center pt-2"
											onClick={handleSubmitClass}>
											Crear
										</a>
									</div>
								</form>
							)}
						</div>
						<a className="cursor-pointer" onClick={handleAddClass}>
							<AddIcon />
						</a>
					</div>
				</div>
			)}
		</main>
	);
};

export default StudentDetail;
