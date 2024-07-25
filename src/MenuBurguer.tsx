import { Link } from "react-router-dom"

function MenuBurguer() {

    return (
        <div>
            <aside className="bg-black text-white ">
                <p>
                    Menu
                </p>
            </aside>
            <button className="flex mx-60 border bg-black text-white p-4 rounded-md hover:bg-gray-700 transition-all">
                <Link to={"/NewModal"} className="">
                    New Modal
                </Link>
            </button>
        </div>
    )
}

export default MenuBurguer