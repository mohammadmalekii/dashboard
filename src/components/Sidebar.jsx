import { linkData } from "../data";

export default function Sidebar() {
  return (
    <aside className="bg-white w-1/5 dark:bg-gray-800 relative">
      <ul className="flex flex-col gap-5 p-3.5">
        {linkData.map(({ linkName, Icon }) => (
          <li
            key={linkName}
            className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500"
          >
            <p>{linkName}</p>
            <Icon className="h-7 w-7 text-slate-600 dark:text-white" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
