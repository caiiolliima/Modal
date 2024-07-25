import { useState } from "react"
import SidebarMenuBurguer from "./components/SidebarMenuBurguer"
import { Link } from "react-router-dom"

function MenuBurguer() {

  const [open, setOpen] = useState<boolean>(false)

  return (
        <aside>
          <SidebarMenuBurguer open={open} onClose={() => setOpen(false)}>
            <div className="">
              <h1 className="text-black">Modal Title</h1>
              <p>Qualquer coisa</p>
            </div>
          </SidebarMenuBurguer>
          
            <button>
            <Link to={"/NewModal"} className="">
              New Modal
            </Link>
            </button>
        </aside>
  )
}

export default MenuBurguer