import { useState } from "react"
import Modal from "./components/Modal"
import { Link } from "react-router-dom"

function NewModal() {

  const [open, setOpen] = useState<boolean>(false)

  return (
  <>
      <div className="p-10 flex justify-center w-full">
        <button className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setOpen(true)}>
            Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2x1">Modal Title</h1>
            <p>Qualquer coisa</p>
            <hr className="border-t-solid border-1 border-gray"/>
            <div className="flex flex-row justify-center">
              <button className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-900 hover:bg-blue-500 text-white" onClick={() => setOpen(false)}>
                Confirm
              </button>
              <button className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-red-900 hover:bg-red-500 text-white" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </Modal>
        <button>
          <Link to={"/MenuBurguer"} className="border border-neutral-300 rounded-lg py-[6px] px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white">
                Menu Burguer
          </Link>
        </button>
        <button>
          <Link to={"/Sidebar"} className="border border-neutral-300 rounded-lg py-[6px] px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white">
                Side Bar
          </Link>
        </button>
        <button>
          <Link to={"/SidebarAnt"} className="border border-neutral-300 rounded-lg py-[6px] px-10 my-2 bg-blue-500 hover:bg-blue-600 text-white">
                SidebarAnt
          </Link>
        </button>
      </div>
  </>
  )
}

export default NewModal