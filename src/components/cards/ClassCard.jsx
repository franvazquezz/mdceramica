import React, {useEffect, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";
import {useDispatch, useSelector} from "react-redux";
import {getClass, getStudentById, putClass} from "../../redux/actions";

const ClassCard = ({item, id}) => {
	const dispatch = useDispatch();
	const [editClassToggle, setEditClassToggle] = useState(false);
	const [currentItem, setCurrentItem] = useState(item);
	const handleEditClass = () => {
		setEditClassToggle(!editClassToggle);
	};
	const handleSubmit = () => {
		setEditClassToggle(!editClassToggle);
		dispatch(putClass(id, currentItem.id, currentItem));
		setCurrentItem(currentItem);
	};
	const handleChange = (e) => {
		setCurrentItem((prevItem) => ({
			...prevItem,
			[e.target.name]: e.target.value,
		}));
	};
	const handleChangeCheckbox = () => {
		setCurrentItem((prevClass) => ({
			...prevClass,
			classPaid: !prevClass.classPaid,
		}));
	};
	const handleChangeCheckboxOven = () => {
		setCurrentItem((prevClass) => ({
			...prevClass,
			ovenPaid: !prevClass.ovenPaid,
		}));
	};
	const handleChangeCheckboxMaterial = () => {
		setCurrentItem((prevClass) => ({
			...prevClass,
			materialPaid: !prevClass.materialPaid,
		}));
	};
	return (
		<div key={item.id} className="min-h-[250px] w-[250px] rounded-[20px] shadow-md px-[10px]">
			{!editClassToggle ? (
				<div>
					<div className="flex flex-row justify-between">
						<p className="w-1/2 text-center">{item.className}</p>
						<a className="text-right cursor-pointer" onClick={handleEditClass}>
							<EditIcon />
						</a>
					</div>
					<ul className="grid grid-cols-1 gap-2">
						<li>
							{item.classDay &&
								`${item.classDay.slice(8, 10)}/${item.classDay.slice(5, 7)}/${item.classDay.slice(0, 4)}`}
						</li>
						<li>{item.classPrice}</li>
						<li>{item.classPaid ? <p>Si</p> : <p>No</p>}</li>
						<li>{item.ovenPrice}</li>
						<li>{item.ovenPaid ? <p>Si</p> : <p>No</p>}</li>
						<li>{item.materialName}</li>
						<li>{item.materialPrice}</li>
						<li>{item.materialPaid ? <p>Si</p> : <p>No</p>}</li>
					</ul>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<ul className="grid grid-cols-1 gap-2">
							<div className="flex flex-row justify-between">
								<input
									className="w-1/2 shadow-sm text-end rounded-[20px]"
									type="text"
									name="className"
									value={currentItem.className}
									onChange={handleChange}
								/>
								<a className="text-right cursor-pointer" onClick={handleEditClass}>
									<EditIcon />
								</a>
								<a className="text-center cursor-pointer" onClick={handleSubmit}>
								<VerifiedIcon />
								</a>
							</div>
							<input
								className="shadow-sm text-end rounded-[20px]"
								type="date"
								name="classDay"
								value={currentItem.classDay}
								onChange={handleChange}
							/>
							<input
								className="shadow-sm text-end rounded-[20px]"
								type="text"
								name="classPrice"
								value={currentItem.classPrice}
								onChange={handleChange}
							/>
							{currentItem.classPaid === true ? (
								<a className="cursor-pointer" onClick={handleChangeCheckbox}>Pagado</a>
							) : (
								<input
									className="shadow-sm text-end rounded-[20px] h-[20px]"
									type="checkbox"
									name="classPaid"
									value={currentItem.classPaid}
									onChange={handleChangeCheckbox}
								/>
							)}

							<input
								className="shadow-sm text-end rounded-[20px]"
								type="text"
								name="ovenPrice"
								value={currentItem.ovenPrice}
								onChange={handleChange}
							/>
							{currentItem.ovenPaid === true ? (
								<a className="cursor-pointer" onClick={handleChangeCheckboxOven}>Pagado</a>
							) : (
								<input
									className="shadow-sm text-end rounded-[20px] h-[20px]"
									type="checkbox"
									name="ovenPaid"
									value={currentItem.ovenPaid}
									onChange={handleChangeCheckboxOven}
								/>
							)}
							<input
								className="shadow-sm text-end rounded-[20px] h-[40px]"
								type="textarea"
								name="materialName"
								value={currentItem.materialName}
								onChange={handleChange}
							/>
							<input
								className="shadow-sm text-end rounded-[20px] h-[40px]"
								type="text"
								name="materialPrice"
								value={currentItem.materialPrice}
								onChange={handleChange}
							/>
							{currentItem.materialPaid === true ? (
								<a className="cursor-pointer" onClick={handleChangeCheckboxMaterial}>Pagado</a>
							) : (
								<input
									className="shadow-sm text-end rounded-[20px] h-[20px]"
									type="checkbox"
									name="materialPaid"
									value={currentItem.materialPaid}
									onChange={handleChangeCheckboxMaterial}
								/>
							)}
						</ul>
					</div>
				</form>
			)}
		</div>
	);
};

export default ClassCard;
