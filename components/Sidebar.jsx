import { IoHomeSharp, IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 p-2 m-0 flex flex-col text-white shadow-lg bg-black">
        <SidebarItem icon={<IoHomeSharp />} label="Home" />
        <SidebarItem icon={<FaUser />} label="Profile" />
        <SidebarItem icon={<IoSettings />} label="Settings" />
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center h-16 w-full icon-container mb-2 text-black">
      <div className="h-6 w-6 icon">{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default Sidebar;
