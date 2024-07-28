import { HiOutlineSun, HiOutlineMoon} from 'react-icons/hi'
import { Button } from 'antd'

const ToggleThemeButton = ({darkTheme, ToggleTheme} : {darkTheme: any; ToggleTheme: any}) => {
  return (
    <div className='toggle-theme-btn'>
      <Button onClick={ToggleTheme}>
        {darkTheme ? <HiOutlineSun /> :
        <HiOutlineMoon />}
      </Button>
    </div>
  )
}

export default ToggleThemeButton