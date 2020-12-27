import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "./SearchBar.css"
import { Select, Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => {
    message.info('Result for ' + value);

    console.log(value);
}
function handleMenuClick(e) {
  message.info('');
  console.log('click', e);
}


const menu = (
  <Menu onClick={handleMenuClick} default ="1">
    <Menu.Item key="1">
      Search By Name
    </Menu.Item>
    <Menu.Item key="2" >
      Search By Tag
    </Menu.Item>
    <Menu.Item key="3" >
      Search By Image
    </Menu.Item>
  </Menu>
);

const SearchBar = () => {


    
    return(
        <div>
            <Dropdown overlay={menu} className = "DropDown">
                <Button className = "Dropdown">
                     <DownOutlined />
                </Button>
            </Dropdown>
        
        <div><Search 
            
            className = "SearchBar"
            style={{ width: 500}}
            size = "large"
            placeholder="input search text" 
            onSearch={onSearch} enterButton 
        />
        <Input.Group compact>
            <Select defaultValue="byname">
                <Option value="byname">Search By Name</Option>
                <Option value="bytag">Search By Tag</Option>
                <Option value="byimage">Search By Image</Option>
            </Select>
            <Search 
            style={{ width: 500}}
            placeholder="input search text" 
            onSearch={onSearch} enterButton 
            />
        </Input.Group>
        </div>
        
        </div>
    );
}

export default SearchBar;
