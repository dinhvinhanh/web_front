import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

import './SpeedDials.css';
import {imagesHooks} from "../../hooks";
import {albumServices, imagesServices, tagServices} from "../../services";

const useStyles = makeStyles((theme) => ({
    speedDial: {
        fontSize: 50,
        position: 'fixed',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(5),
            right: theme.spacing(5),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(5),
            left: theme.spacing(5),
        },
    },
}));

const SpeedDials = () => {
    const classes = useStyles();

    const history = useHistory();

    const {uploadImages} = imagesHooks.useUploadImage()

    const actions = [
        {
            icon: (
                <label>
                    <input
                        type={"file"}
                        multiple={true}
                        hidden={true}
                        onChange={(event) => {
                            imagesServices.uploadImages(event.target.files).then(
                                res => console.log(res)
                            )
                        }}/>
                    <PhotoCameraIcon className={'cameraIcon'}/>
                </label>
            ), name: 'New photos'
        },
        {icon: <PhotoAlbumIcon onClick={() => setNewAlbum(true)}/>, name: 'New album'},
        {icon: <LocalOfferIcon onClick={() => setNewTag(true)}/>, name: 'New tag'},
    ];

    const [direction, setDirection] = React.useState('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const [newAlbum, setNewAlbum] = useState(false);

    const [newTitle, setNewTitle] = useState("")

    const handleAgreeNewAlbum = () => {
        albumServices.createNewAlbum(newTitle).then(
            res => {
                console.log(res)
                history.push('/photos')
            }
        )
    }

    const [newTag, setNewTag] = useState(false);

    const handleAgreeNewTag = () => {
        tagServices.createNewTag(newTitle).then(
            res => {
                setNewTag(false)
            }
        )
    }

    const handleOnChangeRenameText = (event) => {
        setNewTitle(event.target.value)
    }


    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
            <Dialog
                open={newTag}
                onClose={() => {
                    setNewTitle("")
                    setNewTag(false)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"New tag"}</DialogTitle>
                <DialogContent>
                    <TextField
                        defaultValue={""}
                        onChange={handleOnChangeRenameText}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setNewTitle("")
                        setNewTag(false)
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleAgreeNewTag()} color="secondary" autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={newAlbum}
                onClose={() => {
                    setNewTitle("")
                    setNewAlbum(false)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"New album"}</DialogTitle>
                <DialogContent>
                    <TextField
                        defaultValue={""}
                        onChange={handleOnChangeRenameText}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setNewAlbum(false)
                        setNewTitle("")
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleAgreeNewAlbum()} color="secondary" autoFocus>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SpeedDials;
