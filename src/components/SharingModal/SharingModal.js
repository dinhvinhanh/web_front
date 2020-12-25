import React, {useEffect, useState} from 'react';
import {Modal, Comment, Input, Avatar} from "antd";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import Autocomplete from '@material-ui/lab/Autocomplete';

import './SharingModal.css';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import logo from '../../assets/logo.png';

const {Search} = Input;

const maxHeight = window.innerHeight * 0.5;

const sampleUsers = [
    {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    },
    {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    },
    {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }
]

const SharingModal = ({
                        chosenImageIDs,
                        modalVisible,
                        onCloseModal
                    }) => {

    const [users, setUsers] = useState(sampleUsers)

    const [checked, setChecked] = useState([]);

    // const handleCheck = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    //
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }
    //     setChecked(newChecked);
    // };
    //
    const handleShare = () => {
        console.log(chosenImageIDs)
        console.log(checked)
    }

    const footer = () => {
        if (checked.length !== 0) {
            return (
                <Button variant="contained" color="secondary" onClick={handleShare}>
                    Add
                </Button>
            )
        }
        return null;
    }

    return (
        <Modal
            visible={modalVisible}
            title={"Share"}
            onCancel={() => onCloseModal()}
            centered
            footer={footer()}>
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={users}
                getOptionLabel={(user) => user.email}
                // defaultValue={}
                renderInput={(user) => (
                    <ListItem key={user.id} button>
                        <ListItemAvatar>
                            <Avatar
                                // alt={`Avatar n°${value + 1}`}
                                src={logo}
                            />
                        </ListItemAvatar>
                        <ListItemText id={user.id} primary={`${user.name}`} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={() => {console.log("something")}}
                                checked={checked.indexOf(user.id) !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            />
        </Modal>
    )
}

export default SharingModal;