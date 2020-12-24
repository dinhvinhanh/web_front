import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./form_actionmodel";
import { Modal, Button } from "antd";

const Actionmodel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const addAlbum = () => {};

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        className="modelleft"
        width={265}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
        closable={null}
      >
        <ul>
          <li onClick={() => addAlbum}>
            <p>Add to albums</p>
          </li>
          <li>
            <p>Move to folders</p>
          </li>
          <li>
            <p>Share</p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default Actionmodel;
