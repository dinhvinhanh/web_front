import React, {useState} from 'react';
import {Checkbox} from "antd";
import {DeleteFilled} from "@ant-design/icons";

import './TrashImagesMultipleSelectHeader.css';
import {RedoOutlined} from "@material-ui/icons";

const TrashImagesMultipleSelectHeader = ({
                                             onChangeSelectAll,
                                             onClickAllDelete,
                                             onClickAllRestore,
                                         }) => {

    const [starStatus, setStarStatus] = useState(false);

    return (
        <div>
            <div className={'multipleSelectHeader'}>
                <Checkbox onChange={onChangeSelectAll}><strong>SELECT ALL</strong></Checkbox>
                <div className={'multipleTrashIcons'}>
                    <div>
                        <DeleteFilled onClick={onClickAllDelete}/>
                    </div>
                    <div className={'multipleIcon'}>
                        <RedoOutlined onClick={onClickAllRestore}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrashImagesMultipleSelectHeader