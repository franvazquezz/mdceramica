import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const DataCard = ({handleEdit, currentStudent}) => {
	return (
		<ul className="min-h-[200px] min-w-[300px] flex flex-col p-4 justify-evenly">
			<p className="text-xl text-center pb-[10px] flex flex-row items-center justify-center gap-[50px]">
				Datos{" "}
				<a className="cursor-pointer" onClick={handleEdit}>
					<EditIcon />
				</a>
			</p>
			<li className="flex flex-row justify-between">
				Cumpleaños:{" "}
				<p>
  {currentStudent?.birthday && currentStudent?.birthday.slice(8, 10)}/{currentStudent?.birthday && currentStudent?.birthday.slice(5, 7)}/{currentStudent?.birthday && currentStudent?.birthday.slice(0, 4)}
</p>
			</li>
			<li className="flex flex-row justify-between">
				Teléfono: <p>{currentStudent?.telephone}</p>
			</li>
			<li className="flex flex-row justify-between">
				Día que viene: <p>{currentStudent?.day}</p>
			</li>
			<li className="flex flex-row justify-between">
				Horario: <p>{currentStudent?.timetable}</p>
			</li>
		</ul>
	);
};

export default DataCard;
