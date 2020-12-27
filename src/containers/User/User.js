import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

function onChange(pagination, filters, sorter, extra, checked) {
  console.log("params", pagination, filters, sorter, extra,`switch to ${checked}`);
}

const data = [
  {
    key: "1",
    username: "John Brown",
    email: "1@gmail.com",
    usedstorage: 32,



  },
  {
    key: "2",
    username: "Joe Black",
    email: "1@gmail.com",
    usedstorage: 42,

  },
  {
    key: "3",
    username: "Jim Green",
    email: "1@gmail.com",
    usedstorage: 23,


  },
  {
    key: "4",
    username: "Jim Red",
    email: "1@gmail.com",
    usedstorage: 32,


  }
];

class User extends React.Component {
  state = {
    searchText: "",
    searchedColumn: ""
  };



  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "STT",
        dataIndex: "key",
        key: "key",
        width: "3%",

      },
      {
        title: "UserName",
        dataIndex: "username",
        key: "username",
        width: "15%",
        ...this.getColumnSearchProps("username")
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: "15%",
        ...this.getColumnSearchProps("email")
      },

      {
        title: "Used Storage",
        dataIndex: "usedstorage",
        key: "usedstorage",
        width: "5%",
        defaultSortOrder: "cancel",
        sorter: (a, b) => a.usedstorage - b.usedstorage
      },
      {
        title: "Last Login",
        dataIndex: "last_login",
        key: "last_login",
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
      },
      {
        title: "Is Blocked",
        dataIndex: "is_blocked",
        key: "is_blocked",
        render: is_blocked => ( <Switch defaultChecked 
          checked = {is_blocked}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={onChange} />
        )
      }
    ];
    return <Table columns={columns} dataSource={data} onChange={onChange} />;
  }
}

export default User;