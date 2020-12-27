import React, {useEffect, useState} from 'react';

import {useParams, useHistory} from "react-router-dom";

import {testImages, testAlbums} from './../../photos';

import Folder from "../../components/Folder/Folder";

import Images from "../Images/Images";

import SharingModal from "../../components/SharingModal/SharingModal";

import './Photos.css';

import SpeedDials from "../../components/SpeedDials/SpeedDials";
import {folderServices, imagesServices} from "../../services";
import {folderHelper, imageHelper} from "../../helpers";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import {Modal} from "antd";

const Photos = () => {
    const {id} = useParams()

    const history = useHistory();

    const [images, setImages] = useState([])

    const [imageIDs, setImageIDs] = useState([]);

    const [shareModal, setShareModal] = useState(false);

    const [trashModal, setTrashModal] = useState(false)

    useEffect(() => {
        imagesServices.getImagesList().then(
            res => {
                console.log(res.data)
                const formattedImages = imageHelper.formatImagesList(res.data)
                const formattedImageIDs = imageHelper.formatImageIDs(res.data)
                setImages(formattedImages)
                setImageIDs(formattedImageIDs)
            }
        )
    }, [id])

    return (
        <div>
            {images.length !== 0 ? <Images imagesIDs={imageIDs} handledImages={images}/> : null}
            {/*<Dialog*/}
            {/*    open={renameModal}*/}
            {/*    onClose={() => setRenameModal(false)}*/}
            {/*    aria-labelledby="alert-dialog-title"*/}
            {/*    aria-describedby="alert-dialog-description"*/}
            {/*>*/}
            {/*    <DialogTitle id="alert-dialog-title">{"Rename folder"}</DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <TextField*/}
            {/*            defaultValue={folders[chosenFolderIndex]?.title}*/}
            {/*            onChange={handleOnChangeRenameText}*/}
            {/*        />*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button onClick={() => setRenameModal(false)} color="primary">*/}
            {/*            Cancel*/}
            {/*        </Button>*/}
            {/*        <Button onClick={() => handleAgreeRenameFolder()} color="secondary" autoFocus>*/}
            {/*            Update*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
            {/*<Dialog*/}
            {/*    open={trashModal}*/}
            {/*    onClose={() => setTrashModal(false)}*/}
            {/*    aria-labelledby="alert-dialog-title"*/}
            {/*    aria-describedby="alert-dialog-description"*/}
            {/*>*/}
            {/*    <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <DialogContentText id="alert-dialog-description">*/}
            {/*            This action leads to temporary deletion of this folder. Do you really agree?*/}
            {/*        </DialogContentText>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button onClick={() => setTrashModal(false)} color="primary">*/}
            {/*            Disagree*/}
            {/*        </Button>*/}
            {/*        <Button onClick={() => handleAgreeTrashFolder()} color="secondary" autoFocus>*/}
            {/*            Agree*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
            {/*<SharingModal*/}
            {/*    chosenFolderID={chosenFolderIndex}*/}
            {/*    chosenImageIDs={[]}*/}
            {/*    onCloseModal={() => setShareModal(false)}*/}
            {/*    modalVisible={shareModal}/>*/}
        </div>
    )
};

export default Photos;