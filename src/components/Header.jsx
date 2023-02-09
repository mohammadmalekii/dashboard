import { BellIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-zinc-700 flex justify-between items-center px-7 py-5 shadow-lg">
      <div className="flex gap-5">
        <DarkModeButton />
        <ArrowRightOnRectangleIcon className="h-9 w-9 text-slate-600 border border-slate-300 rounded-full p-[6px] cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:text-slate-800 duration-200 transition-colors" />
        <Cog6ToothIcon className="h-9 w-9 text-slate-600 border border-slate-300 rounded-full p-[6px] cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:text-slate-800 duration-200 transition-colors" />
        <button className="relative">
          <BellIcon className="h-9 w-9 text-slate-600 border border-slate-300 rounded-full p-[6px] cursor-pointer hover:bg-slate-300 dark:text-white dark:hover:text-slate-800 duration-200 transition-colors" />
          <span className="absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-sky-500 rounded-full top-0 -right-1">
            {Number(2).toLocaleString("fa")}
          </span>
        </button>
      </div>
      <div>
        <img src={logo} alt="logo" className="h-12 w-12" />
      </div>
    </header>
  );
}
