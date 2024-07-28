import {Layout} from "antd";
import '../global.css'
import LogoAnt from "./LogoAnt";
import MenuList from "./MenuList";

const {Header, Sider} = Layout;

function SidebarAnt () {
  return (
    <>
      <Layout>
        <Sider className="sidebar">
          <LogoAnt />
          <MenuList />
        </Sider>
      </Layout>
    </>
  )
}

export default SidebarAnt