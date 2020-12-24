import { Layout, Menu } from 'antd';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Images from "../Images/Images";

import './AppLayout.css';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = () => {
    return (
        <Router>
            <Layout style={{height:"100vh"}}>
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
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to={'/images'}>
                                Images
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            Albums
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Sharing
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            Trash
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24 }}>
                            <Switch>
                                <Route path="/images">
                                    <Images />
                                </Route>
                                <Route path="/next-item">
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
                </Layout>
            </Layout>
        </Router>
    )
}

export default AppLayout;