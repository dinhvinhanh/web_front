import React, {useEffect} from 'react';

import {
    useParams
} from "react-router-dom";

const DetailedAlbum = () => {

    const { id } = useParams();

    useEffect(() => {
        //call api to get detailed album
        console.log("NH Petrichor")
    }, [id])



    return (
        <div>album {id}</div>
    )
}

export default DetailedAlbum;