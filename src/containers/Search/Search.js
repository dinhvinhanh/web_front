import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Search = () => {
    const classes = useStyles();

    const [titleSearch, setTitleSearch] = useState(false);

    const onClickOpenSearchByTitle = () => {
        setTitleSearch(true)
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={() => onClickOpenSearchByTitle()}>
                Search by title
            </Button>
            <Button variant="contained" color="primary">
                Search by tag
            </Button>
            <Button variant="contained" color="secondary">
                Search by face
            </Button>
        </div>
    );
}

export default Search;
