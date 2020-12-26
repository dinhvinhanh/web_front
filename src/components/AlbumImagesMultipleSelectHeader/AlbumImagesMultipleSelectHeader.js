import React, {useState} from 'react';
import {Checkbox} from "antd";
import {DeleteFilled} from "@ant-design/icons";

import './AlbumImagesMultipleSelectHeader.css';

const AlbumImagesMultipleSelectHeader = ({
                                  onChangeSelectAll,
                                  onClickAllDelete,
                              }) => {

    const [starStatus, setStarStatus] = useState(false);

    return (
        <div>
            <div className={'multipleSelectHeader'}>
                <Checkbox onChange={onChangeSelectAll}><strong>SELECT ALL</strong></Checkbox>
                <div className={'multipleIcons'}>
                    <div className={'multipleIcon'}><DeleteFilled
                        onClick={onClickAllDelete}/></div>
                </div>
            </div>
        </div>
    )
}

export default AlbumImagesMultipleSelectHeader