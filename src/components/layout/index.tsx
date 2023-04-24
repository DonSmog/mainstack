import { ReactNode } from "react";
import SideBar from "../sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full">
      <div className="flex h-screen overflow-hidden fixed w-1/5 py-6 border-r-2 border-border">
        <SideBar />
      </div>
      <div className="flex flex-col gap-8 pl-[22vw] pr-10 py-6 min-h-[100vh] w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
