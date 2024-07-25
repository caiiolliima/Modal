function SidebarMenuBurguer({open} : {open: boolean }) {

    return (
        <div className={`"bg-black text-white flex w-40" ${open ? "visible bg-black/20" : "invisible"}}`}>
        <p>
            Menu
        </p>
    </div>  
    )
}
export default SidebarMenuBurguer