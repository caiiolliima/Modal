import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import { FaFire, FaPoo} from 'react-icons/fa'
import { HiOutlineLogout } from "react-icons/hi";
import '../global.css'
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <>
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

         <SidebarIcon icon={<FaFire size="28" />} text={"Click to more"}/>
         <SidebarIcon icon={<BsPlus size="32" />} text={"Add"}/>
         <SidebarIcon icon={<BsFillLightningFill size="20" />} text={"Go fast! 💡"}/>
         <SidebarIcon icon={<FaPoo size="20" />} text={"Tooltip 💡"} />
         <SidebarIcon icon={<BsGearFill size ="20" />} text={"Settings"} />
         <Link to={"/"}><SidebarIcon icon={<HiOutlineLogout size="28" />} text={"Logout"} /></Link>
        </div>

        <button className='ml-48 mt-10'>
          <Link to={"/"} className="border border-neutral-300 rounded-lg p-4  bg-blue-500 hover:bg-blue-600 text-white">
                New Modal
          </Link>
          <Link to={"/MenuBurguer"} className="border border-neutral-300 rounded-lg p-4 bg-blue-500 hover:bg-blue-600 text-white">
                Menu Burguer
          </Link>
          <Link to={"/SidebarAnt"} className="border border-neutral-300 rounded-lg p-4 bg-blue-500 hover:bg-blue-600 text-white">
                SidebarAnt
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

export default Sidebar; SidebarIcon