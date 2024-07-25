import { Link } from "react-router-dom"

function MenuBurguer() {

  return (
        <aside>         
            <button>
            <Link to={"/NewModal"} className="">
              New Modal
            </Link>
            </button>
        </aside>
  )
}

export default MenuBurguer