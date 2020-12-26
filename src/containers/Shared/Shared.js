import React, {useState} from 'react';

import {testImages, testAlbums} from "../../photos";

import SharedImages from "./SharedImages/SharedImages";
import SharedFolder from "../../components/SharedFolder/SharedFolder";

import FolderModal from "../../components/FolderModal/FolderModal";

const Shared = () => {

    const [sharedImages, setSharedImages] = useState(testImages);

    const [sharedFolders, setSharedFolders] = useState(testAlbums);

    const handleClickAddToPhotos = () => {
        //call api to add folders to my collection
        // history.push(photos/id)
    }

    return (
        <div>
            <div className={'folderListWrap'}>
                {
                    sharedFolders.map((folder, index) => {
                        return (
                            <div className={'folderWrap'}>
                                <SharedFolder
                                    index={index}
                                    title={folder.title}
                                    createdAt={folder.createdAt}
                                    onClickAddToPhotos={() => handleClickAddToPhotos()}/>
                            </div>
                        )
                    })
                }
            </div>
            <SharedImages handledImages={sharedImages} />
        </div>
    )
}

export default Shared;