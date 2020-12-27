import React, {useEffect, useState} from 'react';

import {testImages, testAlbums} from "../../photos";

import {useParams} from "react-router-dom";

import SharedImages from "./SharedImages/SharedImages";
import SharedFolder from "../../components/SharedFolder/SharedFolder";

import FolderModal from "../../components/FolderModal/FolderModal";

const Shared = () => {

    const {id} = useParams();

    useEffect(() => {
        if (id === undefined) {
            // call api to get root shared folders and foot photos
        } else {
            // call api to get detailed folders
        }
    }, [id])

    const [sharedImages, setSharedImages] = useState(testImages);

    const [sharedFolders, setSharedFolders] = useState(testAlbums);

    const handleClickAddToPhotos = () => {
        //call api to add folders to my collection
        // history.push(photos/id)
    }

    return (
        <div>
            <SharedImages handledImages={sharedImages} />
        </div>
    )
}

export default Shared;