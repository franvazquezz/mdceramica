import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudentByName, removeFinder} from "../redux/actions";
import SearchCard from "./cards/SearchCard";

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
		<div>
			<div className="">
				<input placeholder="Buscar por nombre" className="" type="search" onChange={handleChange} value={name} />
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
		</div>
	);
};

export default SearchBar;
