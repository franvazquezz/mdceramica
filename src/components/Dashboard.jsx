import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "../redux/actions";
import "../App.css";

export default function Dashboard() {
	const dispatch = useDispatch();
	const {allStudents} = useSelector((state) => state);
	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getStudents());
			} catch (error) {
				console.error("Error al obtener estudiantes:", error);
			}
		};

		fetchData();
	}, [dispatch]);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-red-gradient">
			<h1 className="text-xl text-gray-400">Alumnas y Alumnos</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
				{allStudents.map((stu, index) => (
					<a
						href={`/student/${stu.id}`}
						key={index}
						className="text-2xl font-semibold text-gradient rounded-[20px] shadow-lg  focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
						{stu.name}
					</a>
				))}
			</div>
			<a href="/poststudent" className="text-xl text-gray-400">Crear nuevo estudiante</a>
		</div>
	);
}
