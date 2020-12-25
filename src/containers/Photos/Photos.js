import React, {useEffect, useState} from 'react';

import {testImages, testAlbums} from './../../photos';

import Folder from "../../components/Folder/Folder";

import Images from "../Images/Images";

import './Photos.css';

const Photos = () => {
    const [folders, setFolders] = useState(testAlbums)

    const [images, setImages] = useState(testImages)

    useEffect(() => {
        // call api to get all folders
    }, [])

    useEffect(() => {
        // call api to get all images
    }, [])

    const handleClickRenameFolderAction = (index) => {
        console.log("rename folder ", index)
    };

    const handleClickShareFolderAction = (index) => {
        console.log("share folder ", index)
    };

    const handleClickTrashFolderAction = (index) => {
        console.log("trash folder ", index)
    };

    return (
        <div>
            <div className={'folderListWrap'}>
                {
                    folders.map((folder, index) => {
                        return (
                            <div className={'folderWrap'}>
                                <Folder
                                    index={index}
                                    title={folder.title}
                                    createdAt={folder.createdAt}
                                    onClickRenameAction={handleClickRenameFolderAction}
                                    onClickShareAction={handleClickShareFolderAction}
                                    onClickTrashAction={handleClickTrashFolderAction}/>
                            </div>
                        )
                    })
                }
            </div>
            <Images handledImages={images}/>
        </div>
    )
};

export default Photos;