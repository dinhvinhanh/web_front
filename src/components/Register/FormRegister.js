import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

import {useHistory} from "react-router-dom";
import logo1 from './../../assets/logo1.png';

import { QuestionCircleOutlined, MailOutlined, LockOutlined, UserOutlined, LockFilled } from "@ant-design/icons";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
// const residences = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

const RegistrationForm = () => {

  const [form] = Form.useForm();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChangePassword = (e ) => {
    setPassword(e.target.value)
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['@gmail.com', '@vnu.edu.vn', '@yahoo.com',].map((domain) => `${value}${domain}`));
    }
  };

  const emailOptions = autoCompleteResult.map((email) => ({
    label: email,
    value: email,
  }));
  return (
      <Form
          // {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
      >
        <div className="registerlogo1">
          <img src={logo1} alt="logo" width="270" height="250" />
        </div>
        <Form.Item
            name="UserName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
        >
          <Input
              className="registerinputform1"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="UserName"
          />
        </Form.Item>

        <Form.Item
            name="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              }
            ]} hasFeedback
        >
          <Input
              className="registerinputform1"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              value={email}
              onChange={handleOnChangeEmail}
          />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                required: true,
                pattern: new RegExp("^\\S*$"),
                message: "Password cannot contain any whitespace!",
              }
            ]}
            hasFeedback
        >
          <Input.Password
              className="registerinputform1"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleOnChangePassword}
          />
        </Form.Item>

        <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              {
                required: true,
                pattern: new RegExp("^\\S*$"),
                message: "Password cannot contain any whitespace!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                      "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
        >
          <Input.Password
              className="registerinputform1"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Your Password!"
              value={password}
              onChange={handleOnChangePassword}
          />
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                    value
                        ? Promise.resolve()
                        : Promise.reject("You must accept the agreement!"),
              },
            ]}
            // {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item
            // {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit" className="register-form-button1">
            Register
          </Button>
        </Form.Item>
      </Form>
  );
};

export default RegistrationForm;
