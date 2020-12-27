import './UserInfo.css';
import React, {useEffect, useState} from 'react';

import {
    List,
    Avatar,
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
    Progress
} from 'antd';
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import {userServices} from "../../services";

const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

const testData = [
    {
        title: 'UserName:',
        content: 'Nguyen Trung Phong'
    },
    {
        title: 'Email:',
        content: 'NTP@gmail.com'
    },
    {
        title: 'Last Login:',
        content: '22-12-2000'
    },
];

const UserInfo = () => {

    const [data, setData] = useState(testData)

    useEffect(() => {
        userServices.getMe().then(
            res => {
                const newMe = [
                    {
                        title: 'UserName:',
                        content: res.data.user.user_name
                    },
                    {
                        title: 'Email:',
                        content: res.data.user.email
                    },
                    {
                        title: 'Last Login:',
                        content: res.data.user.last_login
                    },
                ];

                setData(newMe)
            }
        )
    }, [])

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return (
        <Form>
            {/*------------- avatar -------------*/}

            <Avatar className="avatar1" size={64} icon={<UserOutlined />} />

            <p className="textfont1 text1">PERSONAL INFO</p>
            <p className="textfont1 text1">Basic info, like your name and email, that you use on SPhotos services</p>

            <hr align="center" width="50%"></hr>
            {/*------------- user information -------------*/}
            <div className="userinfoborder1">
                <List
                    className="userinfogrid1"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (

                        <List.Item>
                            <List.Item.Meta
                                title={<p className="textfont1">{item.title}</p>}
                                description={<div className="textfont1 text2">{item.content}</div>}
                            />
                        </List.Item>
                    )}
                />
            </div>
            {/*------------- used storage -------------*/}
            <div className="usedstoragegrid1">
                <p className="textfont1 ubox1">Used Storage:</p>

                <Tooltip title="30 MB / 100 MB">
                    <Progress
                        className="progressbar1 ubox2"
                        strokeColor={'#fc0fad'}
                        percent={Math.floor(Math.random() * 100)} />
                </Tooltip>
            </div>

            <hr align="center" width="50%"></hr>

            <div className="textfont1 text1">Update your information</div>
            {/* ------------- UserName and Password Update ------------- */}
            <div className="userNameandEmail">
                <Form.Item
                    className="usernamegrid1"
                    name="userName"
                    label={
                        <span>
                            UserName&nbsp;
                            <Tooltip title="Type your new username here!">
                                <QuestionCircleOutlined />
                            </Tooltip>

                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="emailgrid1"
                    name="email"
                    label={<span>
                        Password&nbsp;
                        <Tooltip title="Type your new password here!">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        &nbsp;
                        </span>}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            required: true,
                            pattern: new RegExp("^\\S*$"),
                            message: "Password cannot contain any whitespace!",
                        },
                    ]}
                >
                        <Input />
                </Form.Item>
            </div>

            <div className="text1 textfont1 custext1">By clicking <b>Agree &amp; Update</b>, you agree to the <a href="">User Agreement</a></div>

            <Form.Item className="agreeandupdatebutton">
                <Button className="agreeandupdatebutton" type="primary" htmlType="submit">
                    Agree &amp; Update
                </Button>
            </Form.Item>

        </Form>
    );
};

export default UserInfo;