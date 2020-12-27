import React, {useEffect, useState} from 'react';
import {Modal, Comment, Input} from "antd";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import Autocomplete from '@material-ui/lab/Autocomplete';

import './TagModal.css';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import logo from '../../assets/logo.png';
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";

import './TagModal.css';
import {folderServices, tagServices, userServices} from "../../services";
import {tagHelper, userHelper} from "../../helpers";

const {Search} = Input;

const maxHeight = window.innerHeight * 0.5;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
}));

const TagModal = ({
                      chosenImageIDs,
                      modalVisible,
                      onCloseModal
                  }) => {

    const classes = useStyles();

    const [tags, setTags] = useState([])

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

    const handleAdd = () => {
        tagServices.shareFolder(chosenImageIDs, checked).then(
            res => {
                console.log(res.data)
                window.location.reload();
            }
        )
    }

    const footer = () => {
        if (checked.length !== 0) {
            return (
                <Button variant="contained" color="secondary" onClick={handleAdd}>
                    Add
                </Button>
            )
        }
        return null;
    }

    const handleSearch = (event) => {
        tagServices.searchTag(event.target.value).then(
            res => {
                const formattedTags = tagHelper.formatTagRes(res.data);
                if (formattedTags.length !== 0) {
                    setTags(formattedTags)
                }
            }
        )
    }

    return (
        <Modal
            visible={modalVisible}
            title={"Share"}
            onCancel={() => onCloseModal()}
            centered
            footer={footer()}>
            <TextField id="search" label="Search tags" fullWidth onKeyUp={handleSearch}/>
            <div className={'sharesList'}>
                <List className={classes.root}>
                    {tags.map((tag, index) => {
                        const labelId = `checkbox-list-secondary-label-${index}`;
                        return (
                            <ListItem key={tag.id} button>
                                <ListItemText id={labelId} primary={`${tag.email}`}/>
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        edge="end"
                                        onChange={handleCheck(tag.id)}
                                        checked={checked.indexOf(tag.id) !== -1}
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

export default TagModal;