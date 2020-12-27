import React from 'react';
import {
    DeleteFilled,
    DownloadOutlined,
    HomeOutlined,
    InfoCircleFilled,
    StarFilled,
    ToolFilled
} from "@ant-design/icons";

import './CustomHeader.css';
import ImageInfos from "../../../components/ImageInfos/ImageInfos";

const CustomHeader = ({
                          onClickInfo,
                          onClickDownload
                      }) => {
    return (
        <div className={'customHeader'}>
            <InfoCircleFilled onClick={onClickInfo} className={'icon'}/>
            <DownloadOutlined onClick={onClickDownload} className={'icon'}/>
        </div>
    )
}

export default CustomHeader;