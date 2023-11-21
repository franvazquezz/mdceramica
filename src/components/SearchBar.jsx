import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getStudentByName, removeFinder} from "../redux/actions";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const handleChange = (event) => {
		setName(event.target.value);
	};
	const onSearch = (name) => {
		try {
			dispatch(getStudentByName(name));
		} catch (error) {
			console.log(error);
			dispatch(removeFinder());
		}
		setName("");
	};
	const handleRemove = () => {
		return dispatch(removeFinder());
	};
	return (
		<div className="w-full flex flex-row justify-evenly items-center">
			<input placeholder="Buscar por nombre" className="p-2 rounded-[20px]" type="search" onChange={handleChange} value={name} />
			<a
				className="cursor-pointer"
				onClick={() => {
					onSearch(name);
				}}>
				🔎
			</a>
			<a className="cursor-pointer" onClick={handleRemove}>
				Reset
			</a>
		</div>
	);
};

export default SearchBar;
