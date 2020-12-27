import React, { useEffect, useState } from "react";

import Form_Forgot_Password from "../../components/Forgot_Password/Form_Forgot_Password";

import "../../components/Forgot_Password/Form_Forgot_Password.css";

const ForgotPassword = () => {
  return ( 
    <div className="forgotpasswordborder1">
      <div className="forgotpasswordcontainer">
        <Form_Forgot_Password />
      </div>
    </div>
  );
};

export default ForgotPassword;
