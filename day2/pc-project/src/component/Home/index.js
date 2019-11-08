import React from 'react';
import createhashHistory from '../../createhashHistory';
import Conten from '../../Router';
import AnHeader from '../Header';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import { from } from 'rxjs';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default  class Alayout extends React.Component {
    render(){
        return(
            <div>
                <Layout>
                    <AnHeader></AnHeader>
                        <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                            <SubMenu
                                key="sub1"
                                title={
                                <span>
                                    <Icon type="user" />
                                    subnav 1
                                </span>
                                }
                            >
                                <Menu.Item key="1"
                                onClick={
                                    ()=>{
                                        createhashHistory.push("/");
                                    }
                                }
                                >option1</Menu.Item>
                                <Menu.Item key="2" onClick={
                                    ()=>{
                                        createhashHistory.push("/iform");
                                    }
                                } >option2</Menu.Item>
                                <Menu.Item key="3" 
                                    onClick={
                                        ()=>{
                                            createhashHistory.push("/echarts");
                                        }
                                    }
                                >option3</Menu.Item>
                                <Menu.Item key="4"
                                    onClick={
                                        ()=>{
                                            createhashHistory.push("/echarts2");
                                        }
                                    }
                                >option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                <span>
                                    <Icon type="laptop" />
                                    subnav 2
                                </span>
                                }
                            >
                                <Menu.Item key="5"
                                    onClick={
                                        () => {
                                            createhashHistory.push("/echarts3");
                                        }
                                    }
                                >option5</Menu.Item>
                                <Menu.Item key="6"
                                     onClick = {
                                         () => {
                                             createhashHistory.push("/echarts4");
                                         }
                                     }
                                >option6</Menu.Item>
                                <Menu.Item key="7"
                                    onClick = {
                                        () => {
                                            createhashHistory.push("/echarts5");
                                        }
                                    }
                                >option7</Menu.Item>
                                <Menu.Item key="8"
                                    onClick = {
                                        () => {
                                            createhashHistory.push("/echarts6");
                                        }
                                    }
                                >option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                <span>
                                    <Icon type="notification" />
                                    subnav 3
                                </span>
                                }
                            >
                                <Menu.Item key="9"
                                     onClick = {
                                         () => {
                                             createhashHistory.push("/echarts7");
                                         }
                                     }
                                >option9</Menu.Item>
                                <Menu.Item key="10"
                                     onClick = {
                                         () => {
                                             createhashHistory.push("/echarts8");
                                         }
                                     }
                                >option10</Menu.Item>
                                <Menu.Item key="11"
                                     onClick = {
                                         () => {
                                             createhashHistory.push("/echarts9");
                                         }
                                     }
                                >option11</Menu.Item>
                                <Menu.Item key="12"
                                     onClick = {
                                         () => {
                                             createhashHistory.push("/echarts10");
                                         }
                                     }
                                >option12</Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                            >
                                <Conten></Conten>
                            </Content>
                        </Layout>
                        </Layout>
                        </Layout>
                </div>
        )
    }
}