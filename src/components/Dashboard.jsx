import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "../redux/actions";
import "../App.css";
import SearchBar from "./SearchBar";

export default function Dashboard() {
	const dispatch = useDispatch();
	const {allStudentsCalendar, studentsName} = useSelector((state) => state);
	useEffect(() => {
		dispatch(getStudents());
	}, []);
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly">
			<a href="/poststudent" className="text-2xl text-gray-700 p-2 shadow-md rounded-[20px] z-10 bg-red-100 mt-5">
				Crear nuevo estudiante
			</a>
			<div className="flex flex-col content-fit">
				{studentsName.length ? <h1 className="text-center font-bold text-2xl px-[10px]">Estudiantes encontrados</h1> : ""}
				<div className="grid grid-cols-1 text-center p-3">
					{studentsName &&
						studentsName.map((student) => (
							<a
								href={`/student/${student.id}`}
								key={student.id}
								className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
								{student.name}
							</a>
						))}
				</div>
			</div>
			<div className="flex flex-col lg:grid lg:grid-cols-6 gap-4">
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-emerald-100 hover:shadow-emerald-500 focus:shadow-emerald-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Lunes</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Lunes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>16:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "16:00" &&
								stu.day === "Lunes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>18:30</p>
					{allStudentsCalendar &&
						allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "18:30" &&
								stu.day === "Lunes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-amber-100 hover:shadow-amber-500 focus:shadow-amber-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Martes</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Martes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>16:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "16:00" &&
								stu.day === "Martes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>18:30</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "18:30" &&
								stu.day === "Martes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-purple-100 hover:shadow-purple-500 focus:shadow-purple-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Miércoles</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Miércoles" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>16:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "16:00" &&
								stu.day === "Miércoles" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>18:30</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "18:30" &&
								stu.day === "Miércoles" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-rose-100 hover:shadow-rose-500 focus:shadow-rose-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Jueves</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Jueves" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>16:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "16:00" &&
								stu.day === "Jueves" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>18:30</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "18:30" &&
								stu.day === "Jueves" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-sky-100 hover:shadow-sky-500 focus:shadow-sky-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Viernes</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Viernes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>16:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "16:00" &&
								stu.day === "Viernes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
					<p>18:30</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "18:30" &&
								stu.day === "Viernes" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
				<div className="min-h-[250px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-lime-100 hover:shadow-lime-500 focus:shadow-lime-500">
					<h1 className="text-center font-bold text-2xl px-[10px]">Sábado</h1>
					<p>10:00</p>
					{allStudentsCalendar &&
						allStudentsCalendar.map(
							(stu, index) =>
								stu.timetable === "10:00" &&
								stu.day === "Sábado" && (
									<a
										href={`/student/${stu.id}`}
										key={index}
										className="text-2xl font-semibold text-gradient focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
										{stu.name}
									</a>
								)
						)}
				</div>
			</div>
		</div>
	);
}
