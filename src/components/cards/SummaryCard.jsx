import React from "react";

const SummaryCard = ({ currentStudent }) => {
  const totalClasses = currentStudent?.classes.length >=1 ? currentStudent?.classes.length : 0;

  const moneyToPay = currentStudent?.classes
    ? currentStudent?.classes.reduce(
        (total, clase) => {
          if (clase.classPaid) {
            total.number += 1;
          }

          if (!clase.classPaid) {
            total.class += parseInt(clase.classPrice);
          }

          if (!clase.ovenPaid) {
            total.oven += parseInt(clase.ovenPrice);
          }

          if (!clase.materialPaid) {
            let splitted = clase.materialPrice.split(",");
            for (let i = 0; i < splitted.length; i++) {
              total.materials += parseInt(splitted[i]);
            }
          }

          return total;
        },
        { number: 0, class: 0, oven: 0, materials: 0 }
      )
    : { number: 0, class: 0, oven: 0, materials: 0 };

  const totalToPay =
    moneyToPay.class + moneyToPay.oven + moneyToPay.materials;

  return (
    <div className="min-w-[350px] flex flex-col justify-between">
      <p className="text-2xl text-center">Resumen</p>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">Clases hechas: </p>
        <p>{totalClasses}</p>
      </div>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">Clases pagadas: </p>
        <p>{moneyToPay.number}</p>
      </div>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">{`Clases por pagar (${
          totalClasses > moneyToPay.number
            ? totalClasses - moneyToPay.number
            : "0"
        }) : `}</p>
        <p>${moneyToPay.class}</p>
      </div>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">Hornos por pagar: </p>
        <p>${moneyToPay.oven}</p>
      </div>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">Materiales por pagar: </p>
        <p>${moneyToPay.materials}</p>
      </div>
      <div className="flex flex-row justify-between px-6">
        <p className="text-left">Total por pagar: </p>
        <p>${totalToPay}</p>
      </div>
    </div>
  );
};

export default SummaryCard;