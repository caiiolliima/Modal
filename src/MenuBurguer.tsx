import { Link } from "react-router-dom"

function MenuBurguer() {

    return (
        <>
            <div className="flex">
                <div className={`w-72 h-screen bg-blue-900 text-white`}>
                    Sidebar
                </div>

                <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
                    <h1>Home Page</h1>
                </div>
                <button className="w-[150px] h-[100px] border bg-black text-white rounded-md hover:bg-gray-700 transition-all">
                    <Link to={"/"} className="">
                        New Modal
                    </Link>
                </button>
            </div>
        </>
    )
}

export default MenuBurguer