import React, {useEffect, useState} from 'react';
import {Modal, Comment, Input, Avatar} from "antd";

import './AlbumModal.css';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import './AlbumModal.css';
import {albumServices, imagesServices} from "../../services";
import {albumHelper} from "../../helpers";

import {useHistory} from 'react-router-dom';

const {Search} = Input;

const maxHeight = window.innerHeight * 0.5;

const sampleAlbums = [
    {
        id: 1,
        title: "album1",
        totalImages: 5
    }, {
        id: 2,
        title: "album2",
        totalImages: 10
    }, {
        id: 3,
        title: "album3",
        totalImages: 15
    },
    {
        id: 4,
        title: "album1",
        totalImages: 5
    }, {
        id: 5,
        title: "album2",
        totalImages: 10
    }, {
        id: 6,
        title: "album3",
        totalImages: 15
    },
    {
        id: 7,
        title: "album1",
        totalImages: 5
    }, {
        id: 8,
        title: "album2",
        totalImages: 10
    }, {
        id: 9,
        title: "album3",
        totalImages: 15
    }
]

const AlbumModal = ({
                        chosenImageIDs,
                        modalVisible,
                        onCloseModal
                    }) => {

    const history = useHistory();

    const [albums, setAlbums] = useState(sampleAlbums)

    const [checked, setChecked] = useState([]);

    const handleCheck = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const handleAddAlbum = () => {
        imagesServices.addImagesToAlbums(chosenImageIDs, checked).then(
            res => {
                history.push('/albums')
            }
        )
    }

    useEffect(() => {
        albumServices.getAlbumsList().then(
            res => {
                const albums = albumHelper.formatAlbumListRes(res.data)
                setAlbums(albums)
            }
        )
    }, [])

    const albumsList = () => {

        const items = albums.map((album, index) => {
            return (
                <ListItem key={album.id} role={undefined} dense button onClick={handleCheck(album.id)}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(album.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText id={index} primary={`${album.title} (${album.totalImages})`}/>
                </ListItem>
            )
        })

        return (
            <List className={'albumsList'}>
                {items}
            </List>
        )
    }

    const footer = () => {
        if (checked.length !== 0) {
            return (
                <Button variant="contained" color="secondary" onClick={handleAddAlbum}>
                    Add
                </Button>
            )
        }
        return null;
    }

    return (
        <Modal
            visible={modalVisible}
            title={"Add to albums"}
            onCancel={() => onCloseModal()}
            centered
            footer={footer()}>
            {albumsList()}
        </Modal>
    )
}

export default AlbumModal;