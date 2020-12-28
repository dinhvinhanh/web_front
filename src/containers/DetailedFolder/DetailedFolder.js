import React, {useEffect, useState, useHistory} from 'react';

import {
    useParams
} from "react-router-dom";


const DetailedFolder = () => {
    const { id } = useParams();



    useEffect(() => {
        //call api to get detailed album
        console.log("NH Petrichor")
    }, [id])



    return (
        <div>folder {id}</div>
    )
}

export default DetailedFolder;