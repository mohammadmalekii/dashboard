import { NavLink } from "react-router-dom";
import { linkData } from "../data";
export default function Links() {
  return linkData.map(({ linkName, Icon, path }) => (
    <NavLink
      to={path}
      key={linkName}
      className={({ isActive }) =>
        isActive
          ? "flex justify-end items-center gap-2 bg-slate-100 hover:bg-slate-200 border-r-4 border-blue-600 hover:border-blue-500 hover:rounded-lg active:border-blue-700 text-blue-600 transition-all duration-200 rounded-lg p-2 cursor-pointer dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-900 last:text-blue-600"
          : "flex justify-end items-center gap-2 hover:bg-slate-100 border-r-4 border-white dark:border-gray-800 hover:border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500"
      }
    >
      <p className="min-w-max">{linkName}</p>
      <Icon className="h-7 w-7 dark:text-white" />
    </NavLink>
  ));
}
