import React, {useEffect, useState} from 'react';

import { testImages } from './../../photos';

import Images from "../Images/Images";

const Photos = () => {
    const [folders, setFolders] = useState([])

    const [images, setImages] = useState(testImages)

    useEffect(() => {
        // call api to get all folders
    }, [])

    useEffect(() => {
        // call api to get all images
    }, [])

    return (
        <div>
            <Images handledImages={images} />
        </div>
    )
};

export default Photos;