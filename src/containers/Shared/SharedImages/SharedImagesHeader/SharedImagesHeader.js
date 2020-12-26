import React from 'react';
import {
    AppstoreAddOutlined,
    DeleteFilled,
    DownloadOutlined, ForkOutlined,
    InfoCircleFilled,
} from "@ant-design/icons";

import './SharedImagesHeader.css';

const SharedImagesHeader = ({
                                onClickInfo,
                                onClickDownload,
                                onClickAddToPhotos
                            }) => {
    return (
        <div className={'customHeader'}>
            <InfoCircleFilled onClick={onClickInfo} className={'icon'}/>
            <DownloadOutlined onClick={onClickDownload} className={'icon'}/>
            <AppstoreAddOutlined onClick={onClickAddToPhotos} className={'icon'}/>
        </div>
    )
}

export default SharedImagesHeader;