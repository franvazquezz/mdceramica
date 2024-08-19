import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getStudentById, deleteStudent} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PutStudentData from "./forms/PutStudentData";
import PostClassData from "./forms/PostClassData";
import ClassCard from "./cards/ClassCard";
import SummaryCard from "./cards/SummaryCard";
import DataCard from "./cards/DataCard";
import Swal from "sweetalert2";
import {ArrowLeft, Plus, Trash} from "tabler-icons-react";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const {currentStudent} = useSelector((state) => state);
	const [student, setStudent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [editToggle, setEditToggle] = useState(false);
	const [addClassToggle, setAddClassToggle] = useState(false);
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
				await dispatch(getStudentById(id));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [id]); // Ejecutar la consulta cada vez que el id cambie

	useEffect(() => {
		setStudent(currentStudent);
		setLoading(false);
	}, [currentStudent]);
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
		Swal.fire({
			title: "Quieres eliminar el estudiante?",
			showDenyButton: true,
			showConfirmButton: false,
			showCancelButton: true,
			denyButtonText: `Eliminar`,
			cancelButtonText: `Mantener`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isDenied) {
				dispatch(deleteStudent(id));
				Swal.fire("Estudiante eliminado!", "", "success");
				setTimeout(() => {
					window.location.href = "/";
				}, 1000);
			} else if (result.isConfirmed) {
			}
		});
	};
	return (
		<>
			{loading ? (
				<p>Cargando alumno...</p>
			) : (
				<div className="min-h-screen flex flex-col items-center">
					<div className="w-10/12 pt-2 flex justify-between">
						<Link to="/">
							<ArrowLeft size={"2rem"}></ArrowLeft>
						</Link>
						<button onClick={handleDelete} className="focus:opacity-80">
							<Trash></Trash>
						</button>
					</div>
					<div>
						{!editToggle ? (
							<DataCard currentStudent={student} handleEdit={handleEdit} />
						) : (
							<PutStudentData
								newStudent={newStudent}
								setNewStudent={setNewStudent}
								handleChange={handleChange}
								handleEdit={handleEdit}
								id={id}
							/>
						)}
						<div className="flex flex-col gap-4">
							{!addClassToggle ? (
								<div className="flex flex-col gap-4">
									<div className="flex flex-row items-center justify-center gap-[50px]">
										<p className="text-center text-2xl font-semibold">Meses</p>
										<a className="cursor-pointer" onClick={handleAddClass}>
											<Plus />
										</a>
									</div>
									<div className="flex flex-row min-w-11/12 text-left items-center justify-center">
										<div className="w-full grid grid-cols-1 place-items-center text-center gap-4">
											{student?.classes && student?.classes.length >= 1 ? (
												student?.classes.map((item, index) => <ClassCard key={index} item={item} id={id} />)
											) : (
												<p className="text-center text-xl">No hay clases, agregar</p>
											)}
										</div>
									</div>
									<SummaryCard classesIndex={classesIndex} currentStudent={student} moneyToPay={moneyToPay} />
								</div>
							) : (
								<PostClassData handleAddClass={handleAddClass} id={id} />
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default StudentDetail;
