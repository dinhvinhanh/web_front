import React, {useEffect, useState} from 'react';

import './FolderModal.css';
import {Modal} from "antd";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from '@material-ui/icons/Folder';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const testFolders = [
    {
        id: 1,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 2,
        title: "folder 1",
        subFolders: 0
    },
    {
        id: 3,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 4,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 5,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 3,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 4,
        title: "folder 1",
        subFolders: 0
    },
    {
        id: 5,
        title: "folder 1",
        subFolders: 0
    },
    {
        id: 3,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 4,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 5,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 3,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 4,
        title: "folder 1",
        subFolders: 4
    },
    {
        id: 5,
        title: "folder 1",
        subFolders: 4
    }
]

const FolderModal = ({
                         chosenImageIDs,
                         modalVisible,
                         onCloseModal
                     }) => {

    const [previousFolder, setPreviousFolder] = useState(0);

    const [currentFolder, setCurrentFolder] = useState(1);

    const [folders, setFolders] = useState(testFolders);

    useEffect(() => {
        // call api to get all folders of current folders
    }, [currentFolder])

    const handleClickBackFolder = () => {
        // call api to get folders detail of previous folder and render lai
    }

    const handleClickForwardFolder = () => {
        // call api to get folders detail
    }

    const handleClickMoveHere = () => {
        // call api to move chosen images id to current folder id
        // history.push('folders/id')
    }

    const footer = () => {
        return (
            <Button variant="contained" color="secondary" onClick={handleClickMoveHere}>
                Move here
            </Button>
        )
    }

    const foldersList = () => {
        const items = folders.map((folder, index) => {
            return (
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <FolderIcon/>
                        </ListItemIcon>
                        <ListItemText primary={`${folder.title}`}/>
                        {folder.subFolders !== 0 ? (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => handleClickForwardFolder()}>
                                <ArrowForwardIcon/>
                            </IconButton>
                        ) : null}
                    </ListItem>
                </div>
            )
        })

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="currentFolder" style={{fontSize: 16}}>
                        {currentFolder !== 0 ? (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => handleClickBackFolder()}>
                                <ArrowBackIcon/>
                            </IconButton>
                        ) : null}
                        Current Folder
                    </ListSubheader>
                }
            >
                <div className={'foldersList'}>
                    {items}
                </div>
            </List>
        )
    }

    return (
        <div>
            <Modal
                visible={modalVisible}
                title={"Move to folders"}
                onCancel={() => onCloseModal()}
                centered
                footer={footer()}>
                {foldersList()}
            </Modal>
        </div>
    )
};

export default FolderModal;