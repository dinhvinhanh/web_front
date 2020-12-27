import React, {useState} from "react";
import {Layout} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';

import {useHistory} from "react-router-dom";

import User from "../User/User";
import Images from "../Images/Images";
import Albums from "../Albums/Albums";
import Shared from "../Shared/Shared";
import Trash from "../Trash/Trash";
import './AppLayout.css';
import logo from './../../assets/logo.png';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Photos from "../Photos/Photos";

const {Header, Content, Footer, Sider} = Layout;

const AppLayout = () => {

    const history = useHistory();

    const [mainAnchorEl, setMainAnchorEl] = useState(null);

    const handleCloseMainMenu = () => {
        setMainAnchorEl(null)
    };

    const handleClickMainMenu = (event) => {
        setMainAnchorEl(event.currentTarget);
    };

    const [accountAnchorEl, setAccountAnchorEl] = useState(null);

    const handleCloseAccountMenu = () => {
        setAccountAnchorEl(null)
    };

    const handleClickAccountMenu = (event) => {
        setAccountAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar className={'appBar'} variant={"dense"}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClickMainMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="account"
                        anchorEl={mainAnchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(mainAnchorEl)}
                        onClose={handleCloseMainMenu}
                    >
                        <MenuItem onClick={() => history.push("/photos")}>Photos</MenuItem>
                        <MenuItem onClick={() => history.push("/albums")}>Albums</MenuItem>
                        <MenuItem onClick={() => history.push("/shared")}>Shared</MenuItem>
                        <MenuItem onClick={() => history.push("/trash")}>Trash</MenuItem>
                        <MenuItem onClick={() => history.push("/user")}>User</MenuItem>
                    </Menu>
                    <div className="logo">
                        <img className={'mainLogo'} src={logo} alt="logo" onClick={() => {
                            history.push("/photos")
                        }}/>
                    </div>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        aria-controls="account-menu"
                        onClick={handleClickAccountMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="account"
                        anchorEl={accountAnchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(accountAnchorEl)}
                        onClose={handleCloseAccountMenu}
                    >
                        <MenuItem onClick={() => history.push("/profile")}>Profile</MenuItem>
                        <MenuItem onClick={() => history.push("/login")}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <div style={{margin: '24px 16px 0'}}>
                <Switch>
                    <Route exact path="/photos">
                        <Photos/>
                    </Route>
                    <Route exact path="/albums">
                        <Albums/>
                    </Route>
                    <Route exact path="/shared">
                        <Shared/>
                    </Route>
                    <Route exact path="/images">
                        <Trash/>
                    </Route>
                    <Route exact path="/user">
                        <User/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default AppLayout;