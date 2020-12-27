import React, {useEffect, useState} from 'react';

import Album from "../../components/Album/Album";

import { useHistory } from 'react-router-dom';

import './Albums.css';

import {testAlbums} from './../../photos';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import images from "../../hooks/images";
import {albumServices} from "../../services";
import {albumHelper} from "../../helpers";

const Albums = () => {
    const history = useHistory();

    const [albums, setAlbums] = useState([]);

    const [chosenAlbumIndex, setChosenAlbumIndex] = useState(0);

    const [renameModal, setRenameModal] = useState(false);

    const [newName, setNewName] = useState("")

    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        albumServices.getAlbumsList().then(
            res => {
                const formattedAlbums = albumHelper.formatAlbumListRes(res.data)
                setAlbums(formattedAlbums)
            }
        )
    }, [])

    const handleClickRenameAction = (index) => {
        setChosenAlbumIndex(index);
        setNewName(albums[index].title)
        setRenameModal(true);
    }

    const handleClickDeleteAction = (index) => {
        setChosenAlbumIndex(index);
        setDeleteModal(true);
    }

    const handleAgreeDeleteAlbum = () => {
        const albumID = albums[chosenAlbumIndex].id
        albumServices.deleteAlbum(albumID).then(
            res => {
                console.log(res)
            }
        )
    }

    const handleAgreeRenameAlbum = () => {
        const albumID = albums[chosenAlbumIndex].id;
        albumServices.renameAlbum(albumID, newName).then(
            res => {
                history.replace("/albums")
            }
        )
    }

    const handleOnChangeRenameText = (event) => {
        setNewName(event.target.value);
        console.log(event.target.value)
    }

    return (
        <div className={'albumListWrap'}>
            {albums.map((album, index) => {
                return (
                    <div className={'albumWrap'}>
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
                    </div>
                )
            })}
            <Dialog
                open={renameModal}
                onClose={() => setRenameModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Rename album"}</DialogTitle>
                <DialogContent>
                    <TextField
                        defaultValue={albums[chosenAlbumIndex]?.title}
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
        </div>
    )
}

export default Albums;