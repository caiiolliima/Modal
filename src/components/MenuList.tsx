import { Menu } from 'antd'
import {HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined} from '@ant-design/icons'

const MenuList = ({darkTheme} : {darkTheme: any}) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} mode="inline" className='menu-bar'>
      <Menu.Item key="home" icon={<HomeOutlined/>}>
        Home
      </Menu.Item>

      <Menu.Item key="activity" icon={<AppstoreOutlined/>}>
        Atividade
      </Menu.Item>

      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key={'Task-1'}>Task 1</Menu.Item>
        <Menu.Item key={'Task-2'}>Task 2</Menu.Item>
        <Menu.Item key={'Task-3'}>Task 3</Menu.Item>
        <Menu.SubMenu key={'Subtasks'} title='Subtasks'>
          <Menu.Item key={'subtasks-1'}>Subtask 1</Menu.Item>
          <Menu.Item key={'subtasks-2'}>Subtask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

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