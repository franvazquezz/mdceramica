import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudents, getStudentDays} from "../redux/actions";
import "../App.css";

export default function Dashboard() {
	const dispatch = useDispatch();
	const {studentsByDay} = useSelector((state) => state);

	// const orderByDay = () => {
	// 	allStudentsCalendar.forEach((student) => {
	// 		student.day === "Lunes" && studentsByDay.lunes.push(student);
	// 		student.day === "Martes" && studentsByDay.martes.push(student);
	// 		student.day === "Miércoles" && studentsByDay.miercoles.push(student);
	// 		student.day === "Jueves" && studentsByDay.jueves.push(student);
	// 		student.day === "Viernes" && studentsByDay.viernes.push(student);
	// 		student.day === "Sábado" && studentsByDay.sabado.push(student);
	// 	});
	// };
	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(getStudents(), getStudentDays());
			} catch (error) {
				console.error("Error al obtener estudiantes:", error);
			}
		};
		
		fetchData();
	}, [dispatch]);
	console.log(studentsByDay)
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-red-gradient">
			<div className="flex flex-col lg:grid lg:grid-cols-6">
				<div key="lunes" className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Lunes</h1>
					{studentsByDay.lunes.map((student, index) => {
						<p>10:00</p>;

						{
							student.timetable === "10:00" && (
								<a
									href={`/student/${student.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{student.name}
								</a>
							);
						}
					})}
				</div>
				{/* <div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Lunes</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Lunes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Lunes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Lunes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Martes</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Martes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Martes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Martes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Miércoles</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Miércoles" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Miércoles" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Miércoles" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Jueves</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Jueves" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Jueves" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Jueves" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Viernes</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Viernes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Viernes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Viernes" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div>
				<div className="grid grid-cols-1 text-center">
					<h1 className="text-center font-bold text-2xl px-[10px]">Sábado</h1>
					<p>10:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "10:00" &&
							stu.day === "Sábado" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>16:00</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.timetable === "16:00" &&
							stu.day === "Sábado" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
					<p>18:30</p>
					{allStudentsCalendar.map(
						(stu, index) =>
							stu.day === "Sábado" && (
								<a
									href={`/student/${stu.id}`}
									key={index}
									className="text-2xl font-semibold text-gradient border border-slate-300 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
									{stu.name}
								</a>
							)
					)}
				</div> */}
			</div>
			<a href="/poststudent" className="text-xl text-gray-400">
				Crear nuevo estudiante
			</a>
		</div>
	);
}
