import React, { useState } from "react";
import { Modal, Button } from "antd";
import { List, Avatar } from "antd";
import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["", "", ""];
const defaultCheckedList = 0;
const ActionaddAlbum = () => {
  const [visible, setVisible] = useState(false);
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
  };

  return (
    <>
      <Button type="dashed" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Add to albums"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={450}
        okType="danger"
        okText="Yes"
        cancelText="No"
        disable="true"
      >
        <ul>
          <li>
            <p>+ New Album</p>
          </li>
          <li>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a>Con người</a>}
                description="Không phải động vật"
              />
              <label for="item1"> </label>
              <input
                type="checkbox"
                id="item1"
                name="item1"
                value="Select"
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
              ></input>
            </List.Item>
          </li>
          <li>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a>Vinh lol</a>}
                description=" lol Vinh"
              />
              <label for="item2"> </label>
              <input
                type="checkbox"
                id="item1"
                name="item2"
                value="Select"
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
              ></input>
            </List.Item>
          </li>
          <li>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a>Long lol</a>}
                description=" lol Long"
              />
              <label for="item3"> </label>
              <input
                type="checkbox"
                id="item1"
                name="item3"
                value="Select"
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
              ></input>
            </List.Item>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default ActionaddAlbum;
