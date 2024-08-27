
import { cn } from "../../../lib/utils";
import React from "react";

const HeaderOptions = ({ title, selected }) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-1 border-b-4 border-transparent pb-3 cursor-pointer",
        selected && "text-gray-700 border-black  border-b-2"
      )}
    >
     <p className=" sm:inline-flex text-sm text-gray-600"> {title}</p>
    </div>
  );
};

export default HeaderOptions;
