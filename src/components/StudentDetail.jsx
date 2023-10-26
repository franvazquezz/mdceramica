import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getStudentById} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const StudentDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const {currentStudent} = useSelector((state) => state);
	useEffect(() => {
		dispatch(getStudentById(id));
	}, [dispatch]);
	console.log(currentStudent);
	return (
		<div>
			<h1>{currentStudent.name}</h1>
      <p>{currentStudent.birthday}</p>
      <p>{currentStudent.telephone}</p>
      <p>{currentStudent.day}</p>
			{currentStudent.classes && currentStudent.classes.map((item, index)=> 
        <h1 key={index}>{ item.className}</h1>)}
		</div>
	);
};

export default StudentDetail;
