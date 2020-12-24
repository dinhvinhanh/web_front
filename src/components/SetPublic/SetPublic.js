import React, { useState } from 'react';
import { Modal, Button } from 'antd'; 
import { Switch } from 'antd'; 
import { Input } from 'antd'; 
import SetPublic from './SetPublic.css'; 
import { Alert } from 'antd';

const SetPub = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [checked, setChecked] = useState(false);

    const { Search } = Input;

    const onSearch = value => console.log(value);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Share
      </Button>
      <Modal
        className ="modal1" 
        title="Share" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} > 
        <div> 
            <Switch checked={checked} onChange={setChecked}/> 
            {checked ?  <p className="fontinf1">You are public. Below is the link you need!</p> :<p className="fontinf1">You are private.</p>}
            {checked ?  <p className="link1">This is the link you need!</p>
                     :  <Search 
                            className ="searchbox1" 
                            placeholder="Input the person's name you want to share with!"
                            allowClear
                            enterButton="Search" 
                            size="small"
                            onSearch={onSearch} 
                        />}  
        </div>
      </Modal>
    </>
  );
};

export default SetPub; 