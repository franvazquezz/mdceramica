import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useDispatch } from "react-redux";
import { putClass } from "../../redux/actions";
import Swal from "sweetalert2";

const ClassCard = ({ item, id }) => {
  const dispatch = useDispatch();
  const [editClassToggle, setEditClassToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState(item);
  const handleEditClass = () => {
    setEditClassToggle(!editClassToggle);
  };
  const handleSubmit = async () => {
    try {
      if (currentItem.assistance === null) {
        setCurrentItem((prevClass) => ({
          ...prevClass,
          assistance: [false, false, false, false],
        }));
      }
      await dispatch(putClass(id, currentItem.id, currentItem));
      setCurrentItem(currentItem);
      Swal.fire({
        title: "Bien hecho!",
        text: "Clase actualizada correctamente!",
        icon: "success",
      });
      setEditClassToggle(!editClassToggle);
    } catch (error) {}
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
  const handleChangeCheckboxAsist = (index) => {
    setCurrentItem((prevClass) => ({
      ...prevClass,
      assistance: prevClass.assistance.map((asist, i) =>
        i === index ? !asist : asist
      ),
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
    <div
      key={item.id}
      className="min-h-[250px] w-full rounded-[20px] shadow-md px-[10px]"
    >
      {!editClassToggle ? (
        <div className="flex flex-col items-center">
          <div className="w-10/12 flex flex-row justify-between">
            <p className="w-1/4 text-start">Clase: </p>
            <p>{item.className}</p>
            <a className="text-right cursor-pointer" onClick={handleEditClass}>
              <EditIcon />
            </a>
          </div>
          <ul className="grid grid-cols-1 w-10/12 gap-1">
            <li className="flex flex-row">
              <h4 className="w-1/2 text-start">Asistencia: </h4>
              <div className="flex flex-col">
                {item.assistance &&
                  item.assistance.map((asist, index) => (
                    <div key={index}>
                      <input type="checkbox" checked={asist} disabled />
                      <label>{`Asistencia ${index + 1}`}</label>
                    </div>
                  ))}
              </div>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Día: </p>
              <p className="text-center">
                {item.classDay &&
                  `${item.classDay.slice(8, 10)}/${item.classDay.slice(
                    5,
                    7
                  )}/${item.classDay.slice(0, 4)}`}
              </p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Precio: </p>
              <p className="text-center">{item.classPrice}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Pagado: </p>
              <p className="text-center">{item.classPaid ? "Si" : "No"}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Precio horno: </p>
              <p>{item.ovenPrice}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Pagado: </p>
              <p className="text-center">{item.ovenPaid ? "Si" : "No"}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Materiales: </p>
              <p>{item.materialName}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Precio: </p>
              <p>{item.materialPrice}</p>
            </li>
            <li className="flex flex-row">
              <p className="w-1/2 text-start">Pagado: </p>
              <p className="text-center">{item.materialPaid ? "Si" : "No"}</p>
            </li>
          </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <ul className="grid grid-cols-1 gap-2">
              <div className="flex flex-row justify-evenly">
                <a
                  className="text-right cursor-pointer"
                  onClick={handleEditClass}
                >
                  <EditIcon />
                </a>
                <a
                  className="text-center cursor-pointer"
                  onClick={handleSubmit}
                >
                  <VerifiedIcon />
                </a>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Clase: </p>
                <input
                  className="shadow-sm text-end rounded-[20px]"
                  type="text"
                  name="className"
                  value={currentItem.className}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <h4 className="w-1/2 text-start">Asistencia: </h4>
                <div className="flex flex-col">
                  {item.assistance &&
                    item.assistance.map((asist, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={currentItem.assistance[index]}
                          onChange={() => handleChangeCheckboxAsist(index)}
                        />
                        <label>{`Asistencia ${index + 1}`}</label>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Día: </p>
                <input
                  className="shadow-sm text-end rounded-[20px]"
                  type="date"
                  name="classDay"
                  value={currentItem.classDay}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Precio: </p>
                <input
                  className="shadow-sm text-end rounded-[20px]"
                  type="number"
                  name="classPrice"
                  value={currentItem.classPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Pagado: </p>
                {currentItem.classPaid === true ? (
                  <a className="cursor-pointer" onClick={handleChangeCheckbox}>
                    Pagado
                  </a>
                ) : (
                  <input
                    className="shadow-sm text-end rounded-[20px] h-[20px]"
                    type="checkbox"
                    name="classPaid"
                    value={currentItem.classPaid}
                    onChange={handleChangeCheckbox}
                  />
                )}
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Precio horno: </p>
                <input
                  className="shadow-sm text-end rounded-[20px]"
                  type="number"
                  name="ovenPrice"
                  value={currentItem.ovenPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Pagado: </p>
                {currentItem.ovenPaid === true ? (
                  <a
                    className="cursor-pointer"
                    onClick={handleChangeCheckboxOven}
                  >
                    Pagado
                  </a>
                ) : (
                  <input
                    className="shadow-sm text-end rounded-[20px] h-[20px]"
                    type="checkbox"
                    name="ovenPaid"
                    value={currentItem.ovenPaid}
                    onChange={handleChangeCheckboxOven}
                  />
                )}
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Materiales usados: </p>
                <input
                  className="shadow-sm text-end rounded-[20px]"
                  type="textarea"
                  name="materialName"
                  value={currentItem.materialName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Precio: </p>
                <input
                  className="shadow-sm text-end rounded-[20px] h-[40px]"
                  type="text"
                  name="materialPrice"
                  value={currentItem.materialPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Pagado: </p>
                {currentItem.materialPaid === true ? (
                  <a
                    className="cursor-pointer"
                    onClick={handleChangeCheckboxMaterial}
                  >
                    Pagado
                  </a>
                ) : (
                  <input
                    className="shadow-sm text-end rounded-[20px] h-[20px]"
                    type="checkbox"
                    name="materialPaid"
                    value={currentItem.materialPaid}
                    onChange={handleChangeCheckboxMaterial}
                  />
                )}
              </div>
            </ul>
          </div>
        </form>
      )}
    </div>
  );
};

export default ClassCard;
