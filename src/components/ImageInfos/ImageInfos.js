import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { List } from 'antd'; 
import { Tag } from 'antd';
import ImageInfos from './ImageInfos.css'  
import {StepForwardOutlined} from '@ant-design/icons';

const ImgInfos = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const data = [
    {
      title: 'Title:', 
      content: 'Title contents'
    },
    {
      title: 'Owner:', 
      content: 'Owner contents'
    },
    {
      title: 'Size:',
      content: 'Size contents'
    },
    {
      title: 'Upload Date:',
      content: 'Upload Date contents'
    },
    {
        title: 'Tag', 
        content: ["tag 1", "tag 2", "tag 3"]
    }
  ];
  return (
    <>
      <Button className= "btn1" type="primary" icon={<StepForwardOutlined />} onClick={showDrawer}>
        Open
      </Button>
      <Drawer
            width={window.screen.width * 0.3}
            title="Image Information"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
        <List
        className="list1" 
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            
            <List.Item>
                <List.Item.Meta
                title={<p className="fontinf">{item.title}</p>}
                description={<div className="fontinf cont1">{item.content}</div>}
                /> 
            </List.Item>
             )}
        /> 
        <Tag className="tag1">This is tag 1</Tag>
        <Tag className="tag1">Tag 2</Tag>
        <Tag className="tag1">This is not tag 2</Tag>
      </Drawer>
    </>
  );
};

export default ImgInfos;