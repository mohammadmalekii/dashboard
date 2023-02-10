import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function DarkModeButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    if (toggle) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        onClick={handleToggle}
        className="w-6 h-11 flex flex-col justify-between items-center bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-y-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      >
        <SunIcon
          className={`h-4 w-4 text-white transition-all duration-100 mt-[2px] ${
            toggle ? "" : "opacity-0"
          }`}
        />
        <MoonIcon
          className={`h-4 w-4 text-gray-400 transition-all duration-100 mb-[2px] ${
            toggle ? "opacity-0" : ""
          }`}
        />
      </div>
    </label>
  );
}
