import {
  PlusCircleIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Content from "./Content";
export default function Project({ title, showMore, contents }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8  shadow-lg">
      <div className="flex justify-end items-center gap-4 pb-4">
        <TrashIcon className="h-7 w-7 shrink-0 text-red-600 dark:text-white" />
        <PencilSquareIcon className="h-7 w-7 shrink-0 text-slate-400 dark:text-white" />
        <p className="text-lg text-blue-500">{title}</p>
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="flex flex-col justify-center items-center ">
          <PlusCircleIcon className="w-7 h-7 text-blue-600" />
          <p className="text-blue-600 min-w-max">افزودن اثر</p>
          {showMore ? (
            <p className="text-gray-600 text-xs mt-7 text-right dark:text-slate-300">
              نمایش بیشتر...
            </p>
          ) : null}
        </div>
        {contents.map((content) => (
          <Content
            key={content.id}
            title={content.title}
            image={content.image}
          />
        ))}
      </div>
    </div>
  );
}
