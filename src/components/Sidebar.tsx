import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import { FaFire, FaPoo} from 'react-icons/fa'
import '../global.css'
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <>
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

         <SidebarIcon icon={<FaFire size="28" />} text={"Tooltip 💡"}/>
         <SidebarIcon icon={<BsPlus size="32" />} text={"Tooltip 💡"}/>
         <SidebarIcon icon={<BsFillLightningFill size="20" />} text={"Tooltip 💡"}/>
         <SidebarIcon icon={<FaPoo size="20" />}text={"Tooltip 💡"} />
         <SidebarIcon icon={<BsGearFill size ="20" />}text={"Tooltip 💡"} />
        </div>

        <button>
          <Link to={"/"} className="border border-neutral-300 rounded-lg m-44 p-10 py-[6px] px-10 bg-blue-500 hover:bg-blue-600 text-white">
                New Modal
          </Link>
          <Link to={"/MenuBurguer"} className="border border-neutral-300 rounded-lg p-2 bg-blue-500 hover:bg-blue-600 text-white">
                Menu Burguer
          </Link>
        </button>

        </>
    )
}

const SidebarIcon =({ icon, text } : {icon:any; text: string}) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default Sidebar