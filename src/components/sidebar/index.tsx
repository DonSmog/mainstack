import logo from "/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";
import { HiOutlinePencil } from "react-icons/hi";
import {
  MdOutlinePeopleAlt,
  MdAlarm,
  MdFilePresent,
  MdDeleteOutline,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { TbCameraPlus } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ReactNode } from "react";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="block pl-6">
        <img
          src={logo}
          alt="MainStack"
          className="w-[40px] h-[40px] cursor-pointer object-contain"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex flex-col gap-5">
        <NavLink to={"/"}>
          <SidebarItems title="Home" icon={<CiGrid42 />} />
        </NavLink>
        <NavLink to={"/item1"}>
          <SidebarItems title="Item 1" icon={<HiOutlinePencil />} />
        </NavLink>
        <NavLink to={"/item1"}>
          <SidebarItems title="Item 2" icon={<MdOutlinePeopleAlt />} />
        </NavLink>
        <NavLink to={"/item1"}>
          <SidebarItems title="Item 3" icon={<CgSandClock />} />
        </NavLink>

        <div className="flex flex-col gap-5">
          <p className="text-secondary pl-6">OTHERS 1</p>
          <NavLink to={"/item1"}>
            <SidebarItems title="Item 4" icon={<TbCameraPlus />} />
          </NavLink>
          <NavLink to={"/item1"}>
            <SidebarItems title="Item 5" icon={<MdDeleteOutline />} />
          </NavLink>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-secondary pl-6">OTHERS 2</p>
          <NavLink to={"/item1"}>
            <SidebarItems title="Item 6" icon={<MdOutlineSubscriptions />} />
          </NavLink>
          <NavLink to={"/item1"}>
            <SidebarItems title="Item 7" icon={<MdFilePresent />} />
          </NavLink>
          <NavLink to={"/item1"}>
            <SidebarItems title="Item 8" icon={<MdAlarm />} />
          </NavLink>
        </div>
      </div>

      <div className="px-6 pt-12 flex flex-row justify-between text-[15px] font-semibold leading-[24px] text-secondary w-full items-center">
        <div className="flex flex-row gap-4 items-center">
          <img src="/user.png" alt="user" className="rounded-full" />
          <h5 className="text-[15px] font-semibold leading-[24px] text-secondary">
            Blessing Daniels
          </h5>
        </div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
};

const SidebarItems = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <div className="sidebar_item">
      <div className="sidebar_item_inner">
        <p>{icon}</p>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default SideBar;
