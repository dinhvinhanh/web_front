import React, {useEffect, useState} from 'react';

import {
    useParams,
    useHistory
} from "react-router-dom";

import AlbumImages from "./AlbumImages/AlbumImages";

import {testImages} from "../../photos";
import {makeStyles} from "@material-ui/styles";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import {albumServices} from "../../services";
import {albumHelper} from "../../helpers";

const testAlbum = {
    id: 1,
    title: "Album title",
    totalImages: 10,
    createdAt: "12-1-2019",
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        width: window.innerWidth * 0.6,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const DetailedAlbum = () => {

    const history = useHistory();

    const { id } = useParams();

    const [detailedAlbum, setDetailedAlbum] = useState({})

    useEffect(() => {
        albumServices.getDetailedAlbum(id).then(
            res => {
                const formattedDetailedAlbum = albumHelper.formatDetailedAlbumRes(res.data)
                setDetailedAlbum(formattedDetailedAlbum)
            }
        )
    }, [id])

    const classes = useStyles();

    const [actionAnchorEl, setActionAnchorEl] = useState(null);

    const [renameModal, setRenameModal] = useState(false);

    const [newName, setNewName] = useState("")

    const [deleteModal, setDeleteModal] = useState(false);

    const handleCloseActionMenu = () => {
        setActionAnchorEl(null)
    };

    const handleClickActionMenu = (event) => {
        setActionAnchorEl(event.currentTarget);
    };

    const handleOnChangeRenameText = (event) => {
        setNewName(event.target.value);
        console.log(event.target.value)
    }

    const handleAgreeDeleteAlbum = () => {
        const albumID = detailedAlbum.id
        albumServices.deleteAlbum(albumID).then(
            res => {
                console.log(res);
                history.push('/albums')
            }
        )
    }

    const handleAgreeRenameAlbum = () => {
        const albumID = detailedAlbum.id;
        albumServices.renameAlbum(albumID, newName).then(
            res => {
                setRenameModal(false);
                setActionAnchorEl(null);
                history.push(`/albums/${id}`)
            }
        )
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="numbers" className={'albumThumbnail'}>
                            {detailedAlbum.totalImages}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon onClick={handleClickActionMenu}/>
                        </IconButton>
                    }
                    title={detailedAlbum.title}
                    subheader={detailedAlbum.createdAt}
                />
                <Menu
                    id="account"
                    anchorEl={actionAnchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(actionAnchorEl)}
                    onClose={handleCloseActionMenu}
                >
                    <MenuItem onClick={() => setRenameModal(true)}>Rename</MenuItem>
                    <MenuItem onClick={() => setDeleteModal(true)}>Delete</MenuItem>
                </Menu>
                <Dialog
                    open={renameModal}
                    onClose={() => setRenameModal(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Rename album"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            defaultValue={detailedAlbum.title}
                            onChange={handleOnChangeRenameText}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setRenameModal(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => handleAgreeRenameAlbum()} color="secondary" autoFocus>
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This action leads to permanent deletion of this album. Do you really agree?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDeleteModal(false)} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={() => handleAgreeDeleteAlbum()} color="secondary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
            <AlbumImages handledImages={testImages} />
        </div>
    )
}

export default DetailedAlbum;