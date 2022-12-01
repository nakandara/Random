import React from "react";
import Swal from "sweetalert2";

const SucceMsg = async () => {
  try {
    const succes = await Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    return succes;
  } catch (error) {
    console.log(error);
  }
};

const ErrorMsg = async () => {
  try {
    const error = await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    
    });
    return error;
  } catch (error) {
    console.log(error);
  }
};
const Notification = {
  SucceMsg,
  ErrorMsg,
};
export default Notification;
