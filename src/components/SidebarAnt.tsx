import {Button, Layout, theme} from "antd";
import '../global.css'
import LogoAnt from "./LogoAnt";
import MenuList from "./MenuList";
import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { MenuUnfoldOutlined, MenuFoldOutlined  } from "@ant-design/icons";

const {Header, Sider} = Layout;

function SidebarAnt () {

  const [darkTheme, setDarkTheme] = useState(true)

  const [collapsed, setCollapsed] = useState(false)

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <>
      <Layout className="h-screen">
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? "dark" : "light"} className="sidebar">
          <LogoAnt />
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} ToggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header style={{padding:0, background: colorBgContainer}}>
            <Button type="text" className="toggle" onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }/>
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default SidebarAnt