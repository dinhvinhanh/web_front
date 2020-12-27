import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Images from "../Images/Images";

import './Search.css';
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Search = () => {
    const classes = useStyles();

    const [mode, setMode] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [tags, setTags] = useState([]);

    const [searchTitle, setSearchTitle] = useState("")

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setMode(event.target.value)
    };

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchTitle(event.target.value)
    }

    const chooseSearchBar = () => {
        if (mode === 1) {
            return (

            )
        }
        if (mode === 2) {
            return (
                <Autocomplete
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                    renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="limitTags" placeholder="Favorites" />
                    )}
                />
            )
        }
    }

    return (
        <div className={'searchBar'}>
            <Paper component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>

                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} value={0}>Title</MenuItem>
                <MenuItem onClick={handleClose} value={1}>Tag</MenuItem>
                <MenuItem onClick={handleClose} value={2}>Face</MenuItem>
            </Menu>
        </div>
    );
}

export default Search;
