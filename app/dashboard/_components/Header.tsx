import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-5 shodow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search />
        <input type="text" placeholder="search..." />
      </div>
      <div>
        <h2 className="bg-primary p-1 rounded-full text-xs text-white">
          Join membership!
        </h2>
      </div>
    </div>
  );
}

export default Header;
