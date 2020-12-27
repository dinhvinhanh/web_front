import { getInputClassName } from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import FormRegister from "../../components/Register/FormRegister";
import "../../components/Register/FormRegister.css"; 

const Register = () => {
  return (
    <div className="registerborder1">
      <div className="registercontainer">
        <FormRegister />
      </div> 
    </div>
  );

    
};
export default Register;
