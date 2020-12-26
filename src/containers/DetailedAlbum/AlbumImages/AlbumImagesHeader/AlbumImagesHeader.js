import React from 'react';
import {
    DeleteFilled,
    DownloadOutlined, ForkOutlined,
    InfoCircleFilled,
} from "@ant-design/icons";

import './AlbumImagesHeader.css';

const AlbumImagesHeader = ({
                          onClickInfo,
                          onClickDownload,
                          onClickDelete,
                          onClickLocation
                      }) => {
    return (
        <div className={'customHeader'}>
            <InfoCircleFilled onClick={onClickInfo} className={'icon'}/>
            <DownloadOutlined onClick={onClickDownload} className={'icon'}/>
            <ForkOutlined onClick={onClickLocation} className={'icon'}/>
            <DeleteFilled onClick={onClickDelete} className={'icon'}/>
        </div>
    )
}

export default AlbumImagesHeader;