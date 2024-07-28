import { useState } from "react"
import { Link } from "react-router-dom"

function MenuBurguer() {

    const [open, setOpen] = useState(false)
    const Menus = [
        { title: "Dashboard", src: "Chart_fill"},
        { title: "Inbox", src: "Chat"},
        { title: "Accounts", src: "User", gap: true},
        { title: "Schedule", src: "Calendar"},
        { title: "Search", src: "Search"},
        { title: "Analytics", src: "ChartBar"},
        { title: "Files", src: "Folder", gap: true},
        { title: "Logout", src: "Logout", gap:true}
    ]
    return (
        <>
            <div className="flex bg-gray-300">

                <div className={`${open ? "w-72" : "w-24"} p-5 pt-8 duration-300 h-screen bg-blue-900 relative`}>

                    <img src="./src/assets/menu.svg" className={`absolute cursor-pointer w-7 -right-0`} onClick={() => setOpen(!open)} />

                    <div className="flex gap-4 items-center">

                        <img src="./src/assets/logo_dev.svg" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>

                        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>DevTools</h1>

                    </div>

                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <li key={index} className={`text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-900 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>

                            <img src={`./src/assets/${menu.src}.svg`} className={`w-10 h-10`}/>

                            <span className={`origin-left font-medium duration-300 ${!open && "scale-0"}`}>{menu.title}</span>

                        </li>
                    ))}
                </ul>

                </div>

                <div className="m-20 font-semibold h-screen">
                    <button>
                        <Link to={"/"} className="border border-neutral-300 rounded-lg py-[6px] px-10 my-2 bg-indigo-500 hover:bg-indigo-600 text-white">
                            New Modal
                        </Link>
                    </button>
                    <button className="">
                        <Link to={"/Sidebar"} className="border border-neutral-300 rounded-lg py-[6px] px-10 my-2 bg-indigo-500 hover:bg-indigo-600 text-white">
                            Sidebar
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MenuBurguer