import React, {useEffect, useState} from 'react';

import Album from "../../components/Album/Album";

import './Albums.css';

import {testAlbums} from './../../photos';

const Albums = () => {

    const [albums, setAlbums] = useState(testAlbums);

    useEffect(() => {
        // call api to get all albums and handle the data
    }, [])

    const handleClickRenameAction = (index) => {
        console.log("rename", index)
    }

    const handleClickDeleteAction = (index) => {
        console.log("delete", index)
    }

    return (
        <div>
            {albums.map((album, index) => {
                return (
                    <Album
                        id={album.id}
                        index={index}
                        title={album.title}
                        createdAt={album.createdAt}
                        totalImages={album.totalImages}
                        thumbnailUrl={album.thumbnailUrl}
                        onClickRenameAction={handleClickRenameAction}
                        onClickDeleteAction={handleClickDeleteAction}
                    />
                )
            })}
        </div>
    )
}

export default Albums;