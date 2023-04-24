import { ReactNode, useState, useEffect, useRef } from "react";
import SideBar from "../sidebar";
import { Divide as Hamburger } from "hamburger-react";

const Layout = ({ children }: { children: ReactNode }) => {
  const screenSize = window.innerWidth;
  const isMobile = screenSize < 768;

  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollListener = () => {
      if (isOpen) {
        setOpen(false);
      }
    };
    const clickOutside = (e: MouseEvent | TouchEvent | PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", clickOutside);
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("click", clickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex w-full h-full relative">
      <div className="lg:flex hidden h-screen overflow-hidden fixed w-1/5 py-6 border-r-2 border-border">
        <SideBar />
      </div>
      {isMobile && (
        <div className="absolute top-2 right-1" ref={ref}>
          <Hamburger color="#FF5403" toggled={isOpen} toggle={setOpen} />
        </div>
      )}

      {isOpen && (
        <div className="absolute z-10 h-screen py-4 left-0 bg-border">
          <SideBar />
        </div>
      )}
      <div className="flex flex-col xl:gap-8 gap-4 xl:pl-[22vw] xl:pr-10 xl:py-6 p-4 min-h-[100vh] w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
