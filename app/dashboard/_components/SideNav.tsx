"use client";
import { FileClock, Home, SettingsIcon, Wallet } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: SettingsIcon,
      path: "/dashboard/setting",
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>

      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
