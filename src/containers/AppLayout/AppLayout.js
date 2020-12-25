import React, {Suspense, useEffect, useState} from "react";
import {Layout, Menu} from 'antd';
import {Link, Switch, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';

import Images from "../Images/Images";
import Albums from "../Albums/Albums";
import Shared from "../Shared/Shared";
import Trash from "../Trash/Trash";
import './AppLayout.css';
import logo from './../../assets/logo.png';

const {Header, Content, Footer, Sider} = Layout;

const AppLayout = () => {

    const location = useLocation();

    const [selectedMenu, setSelectedMenu] = useState("0")

    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname === "/photos") {
            console.log("here")
            setSelectedMenu("1")
        }
        if (location.pathname === "/albums") {
            setSelectedMenu("2")
        }
        if (location.pathname === "/shared") {
            setSelectedMenu("3")
        }
        if (location.pathname === "/trash") {
            setSelectedMenu("4")
        }
    }, [location])


    return (
        <Layout style={{height: "100vh"}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">
                    <Link to="/">
                        <img className={'img'} src={logo} alt="logo"/>
                    </Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedMenu}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        <Link to={'/photos'}>
                            <strong>Photos</strong>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        <Link to={'/albums'}>
                            <strong>Albums</strong>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        <Link to={'/shared'}>
                            <strong>Shared</strong>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined/>}>
                        <Link to={'/trash'}>
                            <strong>Trash</strong>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24}}>
                        <Switch>
                            <Route exact path="/photos">
                                <Images/>
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
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout;