import React from 'react';
import {DeleteFilled, HomeOutlined, InfoCircleFilled, StarFilled, ToolFilled} from "@ant-design/icons";

import './CustomHeader.css';
import ImageInfos from "../../../components/ImageInfos/ImageInfos";

const CustomHeader = ({
    onClickInfo,
    onClickStar,
    onClickDelete,
    onClickTool
                      }) => {
    return (
        <div className={'customHeader'}>
            <InfoCircleFilled onClick={onClickInfo} className={'icon'}/>
            <StarFilled onClick={onClickStar} className={'icon'}/>
            <DeleteFilled onClick={onClickDelete} className={'icon'}/>
            <ToolFilled onClick={onClickTool} className={'icon'}/>
        </div>
    )
}

export default CustomHeader;