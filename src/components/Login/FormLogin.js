
import { Form, Input, Button, Checkbox,AutoComplete } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./FormLogin";
import { Link } from "react-router-dom";
import {useState} from 'react'
import {authServices} from "../../services";

var regexp = /^\S*$/

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleOnChangePassword = (e ) => {
    setPassword(e.target.value)
  }

  const onFinish = () => {
    authServices.login().then(
        res => authServices.setAccessToken(res.data)
    ).catch(
        err => console.log(err)
    )
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
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
        },
        {
            required: true,
            message: 'Please input your E-mail!',
        } 
        ]}hasFeedback
      > 
        <AutoComplete options={emailOptions} onChange={onEmailChange}>
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={username}
            onChange={handleOnChangeUsername}
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!", 
          }, 
          {
            required:true,
            pattern: new RegExp("^\\S*$"),
            message: "No whitespace please!",
          }
        ]} 
        hasFeedback
      >
        <Input.Password 
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password" 
          placeholder="Password"
          value={password}
          onChange={handleOnChangePassword}
        />
      </Form.Item>  
      <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Log in
            </Button>
      </Form.Item> 
      <div>
          <Form.Item> 
            Or <a href="/register"> register now!</a>   
            <a className="login-form-forgot" href="/forgot_password">
              Forgot password
            </a>
          </Form.Item> 
      </div>
    </Form>
  );
};

export default LoginForm;