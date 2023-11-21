import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getStudentById, deleteStudent} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PutStudentData from "./forms/PutStudentData";
import PostClassData from "./forms/PostClassData";
import ClassCard from "./cards/ClassCard";
import SummaryCard from "./cards/SummaryCard";
import DataCard from "./cards/DataCard";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const {currentStudent} = useSelector((state) => state);
	const [loading, setLoading] = useState(true);
	const [editToggle, setEditToggle] = useState(false);
	const [addClassToggle, setAddClassToggle] = useState(false);
	const [editDelete, setEditDelete] = useState(false);
	const [newStudent, setNewStudent] = useState({
		name: "",
		birthday: "",
		telephone: "",
		day: "",
		timetable: "",
	});
	let moneyToPay = {
		number: 0,
		class: 0,
		oven: 0,
		materials: 0,
	};
	let classesIndex = 0;

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
	}, [id]);

	const handleEdit = () => {
		setEditToggle(!editToggle);
	};

	const handleAddClass = () => {
		setAddClassToggle(!addClassToggle);
	};

	const handleChange = (e) => {
		setNewStudent((prevStudent) => ({
			...prevStudent,
			[e.target.name]: e.target.value,
		}));
	};
	const handleDelete = () => {
		dispatch(deleteStudent(id));
	};
	const handleDeleteSure = () => {
		setEditDelete(!editDelete);
	};
	return (
		<main>
			{loading ? (
				<p>Cargando alumno...</p>
			) : (
				<div className="min-h-screen flex flex-col justify-evenly items-center bg-red-gradient p-5">
					<div className="w-[200px] flex flex-row items-center justify-center gap-[50px]">
						<a href="/" className="text-center">
							Volver
						</a>
						<a className="text-center cursor-pointer" onClick={handleDeleteSure}>
							<DeleteIcon />
						</a>
					</div>
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
							<DataCard currentStudent={currentStudent} handleEdit={handleEdit} />
						) : (
							<PutStudentData
								newStudent={newStudent}
								setNewStudent={setNewStudent}
								handleChange={handleChange}
								handleEdit={handleEdit}
								id={id}
							/>
						)}
						<div className="grid grid-cols-1">
							{!addClassToggle ? (
								<div>
									<div className="flex flex-row items-center justify-center gap-[50px]">
										<p className="text-center text-2xl">Clases o Meses</p>
										<a className="cursor-pointer" onClick={handleAddClass}>
											<AddIcon />
										</a>
									</div>
									<div className="flex flex-row min-w-11/12 text-left">
										<div className="w-10/12 grid grid-cols-1 text-center gap-6">
											{currentStudent.classes.length >= 1 ?
													currentStudent.classes.map((item, index) => <ClassCard key={index} item={item} id={id} />) : <p className="text-center text-xl">No hay clases, agregar</p>}
										</div>
									</div>
									<SummaryCard classesIndex={classesIndex} currentStudent={currentStudent} moneyToPay={moneyToPay} />
								</div>
							) : (
								<PostClassData handleAddClass={handleAddClass} id={id} />
							)}
						</div>
					</div>
				</div>
			)}
		</main>
	);
};

export default StudentDetail;
