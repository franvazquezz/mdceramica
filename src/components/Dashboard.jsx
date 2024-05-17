import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "../redux/actions";
import "../App.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Dashboard() {
	const dispatch = useDispatch();
	const {allStudentsCalendar} = useSelector((state) => state);
	const [studentCalendar, setStudentCalendar] = useState(null);
	const [studentBirthdays, setStudentBirthdays] = useState(null);
	const cumples = () => {
		if (studentCalendar) {
			// Obtener la fecha actual
			const currentDate = new Date();

			// Filtrar solo los cumpleaños que están en el futuro
			const futureBirthdays = studentCalendar.filter((stu) => {
				const birthdayDate = new Date(stu.birthday);
				// Solo mantener los cumpleaños que son después de la fecha actual
				return (
					birthdayDate.getMonth() > currentDate.getMonth() ||
					(birthdayDate.getMonth() === currentDate.getMonth() && birthdayDate.getDate() >= currentDate.getDate())
				);
			});

			// Ordenar los alumnos por la fecha de cumpleaños más cercana a la actual
			const sortedStudents = futureBirthdays.sort((a, b) => {
				const dateA = new Date(currentDate.getFullYear(), a.birthday.split("-")[1] - 1, a.birthday.split("-")[2]);
				const dateB = new Date(currentDate.getFullYear(), b.birthday.split("-")[1] - 1, b.birthday.split("-")[2]);
				const diffA = Math.abs(dateA - currentDate);
				const diffB = Math.abs(dateB - currentDate);
				return diffA - diffB;
			});

			// Tomar los próximos tres cumpleaños
			const nextBirthdays = sortedStudents.slice(0, 3);

			// Formatear las fechas de cumpleaños y establecerlas en el estado
			const birthdays = nextBirthdays.map((stu) => {
				return {
					name: stu.name,
					birthday: formatDate(stu.birthday),
				};
			});
			setStudentBirthdays(birthdays);
		}
	};

	const formatDate = (dateString) => {
		// Parseamos la cadena de fecha
		const dateParts = dateString.split("-");
		const year = dateParts[0];
		const month = dateParts[1];
		const day = dateParts[2];

		// Creamos un nuevo objeto Date con las partes de la fecha
		const dateObject = new Date(year, month - 1, day);

		// Creamos un array con los nombres de los meses en español
		const months = [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre",
		];

		// Obtenemos el nombre del mes
		const monthName = months[dateObject.getMonth()];

		// Formateamos la fecha como "dd mmm yyyy"
		const formattedDate = `${day} de ${monthName}`;

		return formattedDate;
	};
	useEffect(() => {
		dispatch(getStudents());
	}, []);

	useEffect(() => {
		setStudentCalendar(allStudentsCalendar);
		setStudentBirthdays(studentCalendar);
		cumples();
	}, [allStudentsCalendar, studentCalendar]);

	const schedules = [
		{day: "Lunes", times: ["10:00", "16:00", "18:30"]},
		{day: "Martes", times: ["10:00", "16:00", "18:30"]},
		{day: "Miércoles", times: ["10:00", "16:00", "18:30"]},
		{day: "Jueves", times: ["10:00", "16:00", "18:30"]},
		{day: "Viernes", times: ["10:00", "16:00", "18:30"]},
		{day: "Sábado", times: ["10:00"]},
	];

	return (
		<>
			{studentCalendar < 1 ? (
				<div className="min-h-screen min-w-screen flex items-center justify-center">
					<img
						className="flex items-center justify-center animate-spin-slow"
						src="favicon.ico"
						height={100}
						width={100}
						alt="md"
					/>
				</div>
			) : (
				<div className="min-h-screen flex flex-col items-center justify-evenly gap-4">
					<Link
						to="/poststudent"
						className="text-2xl text-gray-700 flex fixed top-0 p-2 shadow-md rounded-[20px] z-10 bg-carta-100 mt-5">
						Crear nuevo estudiante
					</Link>
					<img src="favicon.ico" height={100} width={100} alt="md" className="mt-20" />
					<SearchBar />
					<div className="flex flex-col lg:grid lg:grid-cols-6 gap-4">
          {schedules.map((schedule, index) => (
          <div
            key={index}
            className={`min-h-[250px] min-w-[200px] grid grid-cols-1 text-center p-3 rounded-[20px] shadow-md bg-carta-100 hover:shadow-carta-100 focus:shadow-carta-100`}
          >
            <h1 className="text-center font-bold text-2xl px-[10px]">
              {schedule.day}
            </h1>
            {schedule.times.map((time, timeIndex) => (
              <div key={timeIndex} className={"flex flex-col"}>
                <p>{time}</p>
                {studentCalendar &&
                  studentCalendar?.map((stu, index) => {
                    if (stu.timetable === time && stu.day === schedule.day) {
                      return (
                        <Link
                          to={`/student/${stu.id}`}
                          key={index}
                          className="text-2xl font-semibold text-[#ab58b8] focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2"
                        >
                          {stu.name}
                        </Link>
                      );
                    }
                    return null;
                  })}
              </div>
            ))}
          </div>
        ))}
					</div>
					<div className="min-w-[200px] text-center p-3 m-4 mb-20 rounded-[20px] shadow-md bg-viernes-100 hover:shadow-viernes-100 focus:shadow-viernes-100">
						<h1 className="text-2xl text-slate-800">Próximos Cumpleaños</h1>
						<div className="grid grid-cols-1 ">
							{studentBirthdays &&
								studentBirthdays?.map((item, index) => {
									if (index <= 2) {
										return (
											<div
												key={index}
												className="text-lg font-semibold text-slate-800 focus:shadow-orange-200 hover:shadow-lime-200 text-center p-2">
												<h1>{item?.name}</h1>
												<h1>{item?.birthday}</h1>
											</div>
										);
									}
								})}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
