import { Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import NewModal from './NewModal.tsx'
import MenuBurguer from './MenuBurguer.tsx'
import Sidebar from './components/Sidebar.tsx'
import SidebarAnt from './components/SidebarAnt.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NewModal />} />
      <Route path='/MenuBurguer' element={<MenuBurguer />} />
      <Route path='/SideBar' element={<Sidebar />} />
      <Route path='/SidebarAnt' element={<SidebarAnt />} />

    </Routes>
  </BrowserRouter>,
)
