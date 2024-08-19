import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import {Cake, Calendar, Clock, Pencil, Phone, User} from "tabler-icons-react";

const DataCard = ({handleEdit, currentStudent}) => {
	return (
		<ul className="text-lg min-h-[200px] min-w-[300px] flex flex-col py-4 px-1 justify-evenly">
			<p className="text-xl text-center pb-[10px] flex flex-row items-center justify-center gap-[50px]">
				<User />
				<p className="max-w-[50vw] font-bold text-2xl">{currentStudent?.name}</p>
				<a className="cursor-pointer" onClick={handleEdit}>
					<Pencil />
				</a>
			</p>
			<div className="grid grid-cols-2 p-2 w-full gap-2 place-content-center">
				<li className="flex flex-col justify-between gap-5 p-4 border-2 border-black rounded-[20px]">
					<Cake></Cake>
					<p>
						{currentStudent?.birthday && currentStudent?.birthday.slice(8, 10)}/
						{currentStudent?.birthday && currentStudent?.birthday.slice(5, 7)}/
						{currentStudent?.birthday && currentStudent?.birthday.slice(0, 4)}
					</p>
				</li>
				<li className="flex flex-col justify-between gap-5 p-4 border-2 border-black rounded-[20px]">
					<Phone></Phone>
					<p>{currentStudent?.telephone}</p>
				</li>
				<li className="flex flex-col justify-between gap-5 p-4 border-2 border-black rounded-[20px]">
					<Calendar></Calendar>
					<p>{currentStudent?.day}</p>
				</li>
				<li className="flex flex-col justify-between gap-5 p-4 border-2 border-black rounded-[20px]">
					<Clock></Clock>
					<p>{currentStudent?.timetable}</p>
				</li>
			</div>
		</ul>
	);
};

export default DataCard;
