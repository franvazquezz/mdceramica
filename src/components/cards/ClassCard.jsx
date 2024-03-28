import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteClass, putClass } from "../../redux/actions";
import Swal from "sweetalert2";

const ClassCard = ({ item, id }) => {
  const dispatch = useDispatch();
  const [editClassToggle, setEditClassToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState(item);
  const handleEditClass = () => {
    setEditClassToggle(!editClassToggle);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Quieres eliminar la clase?",
      showDenyButton: true,
      showConfirmButton: false,
      showCancelButton: true,
      denyButtonText: `Eliminar`,
      cancelButtonText: `Mantener`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        dispatch(deleteClass(id, currentItem.id));
        Swal.fire("Clase eliminada!", "", "success");
        setTimeout(() => {
          window.location.href = `/student/${id}`;
        }, 1000);
      } else if (result.isConfirmed) {
      }
    });
  };
  const handleSubmit = () => {
    try {
      if (currentItem.assistance === null) {
        setCurrentItem((prevClass) => ({
          ...prevClass,
          assistance: [false, false, false, false],
        }));
      }
      dispatch(putClass(id, currentItem.id, currentItem));
      setCurrentItem(currentItem);
      Swal.fire({
        title: "Bien hecho!",
        text: "Clase actualizada correctamente!",
        icon: "success",
      });
      setTimeout(() => {
        window.location.href = `/student/${id}`;
      }, 1000);
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
            <a className="text-right cursor-pointer" onClick={handleDelete}>
              <DeleteIcon />
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
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Clase: </p>
                <input
                  className="shadow-sm text-end rounded-[20px] w-full"
                  type="text"
                  name="className"
                  value={currentItem.className}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <h4 className="w-1/4 text-start">Asistencia: </h4>
                <div className="grid grid-cols-2 gap-2">
                  {item.assistance &&
                    item.assistance.map((asist, index) => (
                      <div key={index} className="flex gap-1">
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
                  className="shadow-sm text-end rounded-[20px] w-full"
                  type="date"
                  name="classDay"
                  value={currentItem.classDay}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Precio mes: </p>
                <input
                  className="shadow-sm text-end rounded-[20px] w-full"
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
                    className="text-end rounded-[20px] w-full h-[20px]"
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
                  className="shadow-sm text-end rounded-[20px] w-full"
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
                    className="text-end rounded-[20px] w-full h-[20px]"
                    type="checkbox"
                    name="ovenPaid"
                    value={currentItem.ovenPaid}
                    onChange={handleChangeCheckboxOven}
                  />
                )}
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Materiales: </p>
                <textarea
                  className="shadow-sm text-end rounded-[20px] p-2 min-h-[100px] w-3/4"
                  name="materialName"
                  value={currentItem.materialName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-start w-1/4">Precio: </p>
                <input
                  className="shadow-sm text-end rounded-[20px] w-full h-[40px]"
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
                    className="text-end rounded-[20px] w-full h-[20px]"
                    type="checkbox"
                    name="materialPaid"
                    value={currentItem.materialPaid}
                    onChange={handleChangeCheckboxMaterial}
                  />
                )}
              </div>
              <div className="flex items-center justify-center gap-8">
                <a
                  className="text-center cursor-pointer rounded-[20px] p-2 shadow-md"
                  onClick={handleEditClass}
                >
                  Cancelar
                </a>
                <a
                  className="text-center cursor-pointer rounded-[20px] p-2 shadow-md"
                  onClick={handleSubmit}
                >
                  Aplicar
                </a>
              </div>
            </ul>
          </div>
        </form>
      )}
    </div>
  );
};

export default ClassCard;
