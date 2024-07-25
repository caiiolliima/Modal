import { Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import NewModal from './NewModal.tsx'
import MenuBurguer from './MenuBurguer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/NewModal' element={<NewModal />} />
      <Route path='/MenuBurguer' element={<MenuBurguer />} />
    </Routes>
  </BrowserRouter>,
)
