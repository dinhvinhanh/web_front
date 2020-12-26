import React, {useEffect, useState} from 'react';
import {Modal, Comment, Input} from "antd";
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
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";

import './SharingModal.css';

const {Search} = Input;

const maxHeight = window.innerHeight * 0.5;

const sampleUsers = [
    {
        id: 1,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 2,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 3,
        email: "test1@gmail.com",
        avatarUrl: ""
    },
    {
        id: 4,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 5,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 6,
        email: "test1@gmail.com",
        avatarUrl: ""
    },
    {
        id: 7,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 8,
        email: "test1@gmail.com",
        avatarUrl: ""
    }, {
        id: 9,
        email: "test1@gmail.com",
        avatarUrl: ""
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
}));

const SharingModal = ({
                          chosenImageIDs,
                          modalVisible,
                          onCloseModal
                      }) => {

    const classes = useStyles();

    const [users, setUsers] = useState(sampleUsers)

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

    const handleShare = () => {
        console.log(chosenImageIDs)
        console.log(checked)
    }

    const footer = () => {
        if (checked.length !== 0) {
            return (
                <Button variant="contained" color="secondary" onClick={handleShare}>
                    Share
                </Button>
            )
        }
        return null;
    }

    const handleSearch = () => {
        // call api and update users setUsers = ()

        /// move users list to overflow-y
    }

    return (
        <Modal
            visible={modalVisible}
            title={"Share"}
            onCancel={() => onCloseModal()}
            centered
            footer={footer()}>
            <TextField id="search" label="Search users" fullWidth onKeyUp={handleSearch}/>
            <div className={'sharesList'}>
                <List className={classes.root}>
                    {users.map((user, index) => {
                        const labelId = `checkbox-list-secondary-label-${index}`;
                        return (
                            <ListItem key={user.id} button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${user.id + 1}`}
                                        src={`${user.avatarUrl}`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`${user.email}`}/>
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={handleCheck(user.id)}
                                        checked={checked.indexOf(user.id) !== -1}
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </Modal>
    )
}

export default SharingModal;