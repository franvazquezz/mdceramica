import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentByName, removeFinder } from "../redux/actions";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { studentsName } = useSelector((state) => state);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const onSearch = (name) => {
    try {
      dispatch(getStudentByName(name));
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = () => {
    return dispatch(removeFinder());
  };
  return (
    <>
      <div className="w-10/12 flex flex-row justify-evenly items-center border-2 rounded-[20px] border-[#e3fdec] shadow-md shadow-[#bbfcd2]">
        <input
          placeholder="Buscar por nombre"
          className="p-2 bg-transparent outline-none"
          type="search"
          onChange={handleChange}
          value={name}
        />
        <a
          className="cursor-pointer"
          onClick={() => {
            onSearch(name);
          }}
        >
          🔎
        </a>
        <a className="cursor-pointer" onClick={handleRemove}>
          ✖
        </a>
      </div>
      {studentsName &&
        studentsName?.map((stu, index) => {
          if (stu) {
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
    </>
  );
};

export default SearchBar;
