import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
export default function Content({ title, image }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out">
      <div className="relative">
        <img
          className="rounded-t-2xl w-80 h-36 object-cover"
          src={image}
          alt="image"
          loading="lazy"
        />
        <EllipsisVerticalIcon className="h-7 w-7 absolute right-2 top-2 bg-slate-50 p-1 rounded-lg hover:bg-slate-200" />
      </div>
      <p className="text-center py-4 text-slate-900 dark:text-white">{title}</p>
    </div>
  );
}
