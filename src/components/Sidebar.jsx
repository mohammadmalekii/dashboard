import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="bg-white w-1/5 dark:bg-gray-800 h-screen relative">
      <ul className="flex flex-col gap-5 p-3.5">
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>داشبورد</p>
          <Squares2X2Icon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>پروفایل</p>
          <UserCircleIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <span className="inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full top-0 -right-1">
            {Number(3).toLocaleString("fa")}
          </span>
          <p>گفتگو ها</p>
          <ChatBubbleLeftRightIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>ارسال دعوت نامه</p>
          <EnvelopeIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>صدور پیش فاکتور</p>
          <NewspaperIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>عضویت در کانتمو</p>
          <UserPlusIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
        <li className="flex justify-end items-center gap-2 hover:bg-slate-100 hover:border-r-4 border-blue-300 hover:rounded-lg active:border-blue-700 transition-all duration-200 rounded-lg p-2 cursor-pointer  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-900 dark:active:border-blue-500">
          <p>نمایش آثار</p>
          <CubeIcon className="h-7 w-7 text-slate-600 dark:text-white" />
        </li>
      </ul>
    </aside>
  );
}
