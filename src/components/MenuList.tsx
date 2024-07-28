import { Menu } from 'antd'
import {HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined} from '@ant-design/icons'

const MenuList = () => {
  return (
    <Menu theme='dark'>
      <Menu.Item key="home" icon={<HomeOutlined/>}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined/>}>
        Atividade
      </Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined/>}>
        Progresso
      </Menu.Item>
      <Menu.Item key="payment" icon={<PayCircleOutlined/>}>
        Pagamento
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined/>}>
        Configurações
      </Menu.Item>
    </Menu>
  )
}

export default MenuList