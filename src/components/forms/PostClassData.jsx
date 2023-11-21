import React, {useEffect, useState} from "react";
import {postClass} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const PostClassData = ({handleAddClass, id}) => {
	const dispatch = useDispatch();
	const [newClass, setNewClass] = useState({
		className: "",
		classDay: "",
		classPrice: "",
		classPaid: false,
		ovenPrice: "",
		ovenPaid: false,
		materialName: "",
		materialPrice: "",
		materialPaid: false,
	});
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

	const handleSubmitClass = async () => {
		try {
			const response = await dispatch(postClass(id, newClass));
	
			if (response.status === 201) {
				// La solicitud fue exitosa, puedes actualizar el estado
				alert(`Clase ${newClass.className} ha sido creada, actualize la pagina`);
				setNewClass({
					className: "",
					classDay: "",
					classPrice: "",
					classPaid: false,
					ovenPrice: "",
					materialName: "",
					materialPrice: "",
				});
			} else {
				// La respuesta no fue exitosa, puedes manejarlo de acuerdo a tus necesidades
				console.log("La solicitud no fue exitosa. Código de estado:", response.status);
				alert("Error en la solicitud. Por favor, inténtalo de nuevo.");
			}
		} catch (error) {
			console.error("Error en la solicitud:", error);
			alert("Error en la solicitud. Por favor, inténtalo de nuevo.");
		}
	};

	return (
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
					<div className=" flex flex-row items-center justify-center w-1/2">
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
					<div className=" flex flex-row items-center justify-center w-1/2">
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
						className="shadow-sm text-end rounded-[20px] min-h-[40px] p-2"
						type="textarea"
						name="materialName"
						value={newClass.materialName}
						onChange={handleChangeClass}
					/>
				</label>
				<label className="flex flex-row  items-center justify-between px-[10px]">
					Precio de materiales:
					<input
						className="shadow-sm text-end rounded-[20px] min-h-[40px] p-2"
						type="text"
						name="materialPrice"
						value={newClass.materialPrice}
						onChange={handleChangeClass}
					/>
				</label>
				<label className="flex flex-row  items-center justify-between px-[10px]">
					Pagados
					<div className=" flex flex-row items-center justify-center w-1/2">
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
					className="text-center cursor-pointer flex flex-row items-center shadow-md justify-center pt-2"
					onClick={handleAddClass}>
					Volver
				</a>
				<a
					className="text-center cursor-pointer flex flex-row items-center shadow-md	justify-center pt-2"
					onClick={handleSubmitClass}>
					Crear
				</a>
			</div>
		</form>
	);
};

export default PostClassData;
