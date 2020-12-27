import React, {useEffect, useState} from 'react';

import TrashImages from "./TrashImages/TrashImages";

import {testAlbums, testImages} from "../../photos";
import TrashFolder from "../../components/TrashFolder/TrashFolder";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const Trash = () => {

    const [folders, setFolders] = useState(testAlbums)

    const [trashImages, setTrashImages] = useState(testImages)

    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        // call api to get all folders
    }, [])

    useEffect(() => {
        // call api to get all images
    }, [])

    const handleClickDeleteAction = (index) => {
        console.log("rename folder ", index)
    };

    const handleClickRestoreAction = (index) => {
        console.log("share folder ", index)
    };

    const handleAgreeDeleteFolder = () => {

    }

    useEffect(() => {
        // call api to get all trash images
    }, [])

    return (
        <div>
            <TrashImages handledImages={trashImages}/>
            <Dialog
                open={deleteModal}
                onClose={() => setDeleteModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action leads to permanent deletion of this folder. Do you really agree?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteModal(false)} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => handleAgreeDeleteFolder()} color="secondary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Trash;