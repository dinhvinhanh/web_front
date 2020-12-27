import React, {useEffect, useState} from 'react';

import {testImages, testAlbums} from "../../photos";

import {useParams} from "react-router-dom";

import SharedImages from "./SharedImages/SharedImages";
import SharedFolder from "../../components/SharedFolder/SharedFolder";

import FolderModal from "../../components/FolderModal/FolderModal";
import {imagesServices} from "../../services";
import {imageHelper} from "../../helpers";

const Shared = () => {

    const [sharedImages, setSharedImages] = useState([]);

    const [sharedImageIDs, setSharedImageIDs] = useState([])

    useEffect(() => {
        imagesServices.getAllSharedImages().then(
            res => {
                const formatSharedImages = imageHelper.formatImagesList(res.data)
                const formatSharedIDs = imageHelper.formatImageIDs(res.data)
                setSharedImages(formatSharedImages)
                setSharedImageIDs(formatSharedIDs)
                console.log(formatSharedImages)
                console.log(formatSharedIDs)
            }
        )
    }, [])

    const handleClickAddToPhotos = () => {
        //call api to add folders to my collection
        // history.push(photos/id)
    }

    return (
        <div>
            { sharedImages.length !== 0 ? <SharedImages handledIDs={sharedImageIDs} handledImages={sharedImages} /> : null}
        </div>
    )
}

export default Shared;