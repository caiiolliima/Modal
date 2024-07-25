import { useState } from "react"
import Modal from "./components/Modal"

function App() {

  const [open, setOpen] = useState<boolean>(false)

  return (
      <div className="p-10 flex justify-center w-full">
        <button className="border border-neutral-300 rounded-lg py=1.5 px-10 my-2 bg-blue500 hover:bg-blue-600 text-white" onClick={() => setOpen(true)}>
            Open
        </button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4">
            <h1 className="text-2x1">Modal Title</h1>
            <p>Qualquer coisa</p>
            <hr className="border-t-solid border-1 border-gray"/>
            <div className="flex flex-row justify-center">
              <button className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-500 text-white" onClick={() => setOpen(false)}></button>
            </div>
          </div>
        </Modal>
      </div>
  )
}

export default App