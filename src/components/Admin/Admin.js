import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from 'antd';
import {userHelper} from "../../helpers";
import {userServices} from "../../services";

const dataSources = [
    {
        no: 1,
        userName: "gducky",
        email: "gducky@gmail.com",
        isBlocked: "False"
    },
    {
        no: 2,
        userName: "tlinh",
        email: "tlinh@gmail.com",
        isBlocked: "False"
    },
    {
        no: 3,
        userName: "mck",
        email: "mck@gmail.com",
        isBlocked: "False"
    }
]

const columns = [
    {
        title: 'No.',
        dataIndex: 'no',
        align: 'center',
    },
    {
        title: 'Username',
        dataIndex: 'userName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Is blocked',
        dataIndex: 'isBlocked',
        filters: [
            {
                text: 'True',
                value: "True",
            },
            {
                text: 'False',
                value: "False",
            }
        ],
        onFilter: (value, record) => record.isBlocked === value,
    },
    {
        title: 'Action',
        dataIndex: 'isBlocked',
        render: (isBlocked) => {
            return <Button>Block</Button>;
        },
        align: 'center',
    },
];
const pageSize = 10;
const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
        return <Button>Prev</Button>;
    }
    if (type === 'next') {
        return <Button>Next</Button>;
    }
    return originalElement;
};
const paginationProperty = {
    pageSize: pageSize,
    style: {
        marginRight: '5%',
    },
    hideOnSinglePage: true,
    itemRender: itemRender,
};

const Admin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAllUsers().then(
            res => {
                console.log(res.data)
                setUsers(userHelper.formatUser(res.data))
            }
        )
    }, [])


    return (
        <Table
            style={{margin: '2% 5% 0 5%'}}
            columns={columns}
            dataSource={dataSources}
        />
    );
};

export default Admin;
