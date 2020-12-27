import { Form, Input, InputNumber, Button } from "antd";
import Title from "antd/lib/skeleton/Title";
import React from "react";
import "./Form_Forgot_Password";
import logo1 from './../../assets/logo1.png';
// const layout = {
//   labelCol: { span: 2 },
//   wrapperCol: { span: 20 },
// };

const validateMessages = {
  required: "Email is required!",
  types: {
    email: "Email is not a valid email!",
  },
};

const forgotPassword = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      // {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <div className="forgotpasswordlogo1">
            <img src={logo1} alt="logo" width="270" height="250" />
        </div>
      <p className="forgotpasswordfont2"> Forgot your password ?</p>
      <p className="forgotpasswordfont1">
        Please enter your email and we'll send you instructions on how to reset
        your password
      </p>
      <br></br>
      <Form.Item
        name={["user", "email"]}
        rules={[{ type: "email", required: true }]}
      >
        <Input 
          className="forgotpasswordform1"
          placeholder="Email" />
      </Form.Item>
      <Form.Item 
      // wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
      >
        <Button type="primary" htmlType="submit" className="forgotpasswordbutton1">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default forgotPassword;
