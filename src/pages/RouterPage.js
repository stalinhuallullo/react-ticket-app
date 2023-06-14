import React, { useContext, useState } from 'react';

import { Ingresar } from './Ingresar';
import { Escritorio } from './Escritorio';
import { CrearTicket } from './CrearTicket';
import { Cola } from './Cola';

import { BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { UiContext } from '../context/UiContext';
const { Sider, Content } = Layout;


export const RouterPage = () => {
  const [ collapsed, setCollapsed ] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const { ocultarMenu } = useContext( UiContext )

  return (
    <Router>
      <Layout style={{height: '100vh'}}>
      <Sider collapsedWidth="0"
                     breakpoint="md"
                     hidden={ ocultarMenu }>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', icon: <UserOutlined />, label: <Link to={"ingresar"}>Ingresar</Link> },
              { key: '2', icon: <VideoCameraOutlined />, label: <Link to={"cola"}>Cola</Link> },
              { key: '3', icon: <UploadOutlined />, label: <Link to={"crear-ticket"}>Crear Ticket</Link> }
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
            <Routes>
              <Route path="/ingresar" element={<Ingresar/>} />
              <Route path="/cola" element={<Cola/>} />
              <Route path="/crear-ticket" element={<CrearTicket/>} />
              <Route path="/escritorio" element={<Escritorio/>} />

              <Route path="*" element={<Navigate to ="/ingresar" />}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
