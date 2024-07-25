import { MouseEventHandler, ReactNode } from "react"

function SidebarMenuBurguer({open, onClose, children} : {open: boolean; onClose: MouseEventHandler; children: ReactNode }) {
    return (
        <div className={`${open ? "" : ""}`} onClick={onClose}>
        <div className={`${open ? "" : ""}`} onClick={(e) => e.stopPropagation()}>
            <button className="" onClick={onClose}>
              
            </button>
            {children}
        </div>
      </div>
    )
}
export default SidebarMenuBurguer