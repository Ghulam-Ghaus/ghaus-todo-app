"use client";
import { cva } from "class-variance-authority";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { _nav } from "@/constent/nav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Banner from "./Banner";

interface Props {
  children: React.ReactNode;
}
const Navigators: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();
  const [active, setActive] = useState<boolean>(false);

  const toggleSideBar = () => {
    setActive((x) => !x);
  };

  const nav = useMemo(() => {
    return _nav.find((item) => item.link === pathName || null);
  }, [pathName]);

  useEffect(() => {
    toggleSideBar();
  }, [pathName]);

  return (
    <main className="relative min-h-screen overflow-x-hidden flex w-full">
      <div className={sideBar({ active })}>
        <Sidebar nav={_nav} />
      </div>
      <div className={content({ active })}>
        <Header isActiveNav={active} onButtonClick={toggleSideBar} />
        {nav && <Banner title={nav.title} src={nav.photo} />}
        <div className="relative flex-1">{children}</div>
      </div>
    </main>
  );
};

export default Navigators;

const sideBar = cva(
  [
    "bg-[#ccc] dark:bg-[#111] absolute top-0 w-3/4 h-full transition-all duration-300",
  ],
  {
    variants: {
      active: {
        true: ["left-0"],
        false: ["-left-3/4"],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const content = cva(
  [
    "absolute top-0 flex flex-col w-full h-screen p-4 transition-all duration-300",
  ],
  {
    variants: {
      active: {
        true: ["left-3/4"],
        false: ["left-0"],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);
