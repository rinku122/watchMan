import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertcontext = useContext(AlertContext);
  const { alerts } = alertcontext;
  return (
    alerts !== null && (
      <div className={`alert my-1 small + ${alerts.type}`}>
        <span className="fa fa-info-circle mx"></span>
        {alerts.msg}
      </div>
    )
  );
};

export default Alert;
