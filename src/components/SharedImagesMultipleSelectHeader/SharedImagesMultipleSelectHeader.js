import React, {useState} from 'react';
import {Checkbox} from "antd";
import {DeleteFilled, FileAddOutlined} from "@ant-design/icons";

import './SharedImagesMultipleSelectHeader.css';

const SharedImagesMultipleSelectHeader = ({
                                             onChangeSelectAll,
                                             onClickAllAddToPhotos,
                                         }) => {

    const [starStatus, setStarStatus] = useState(false);

    return (
        <div>
            <div className={'multipleSelectHeader'}>
                <Checkbox onChange={onChangeSelectAll}><strong>SELECT ALL</strong></Checkbox>
                <div className={'multipleIcons'}>
                    <div className={'multipleIcon'}>
                        <FileAddOutlined onClick={onClickAllAddToPhotos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharedImagesMultipleSelectHeader