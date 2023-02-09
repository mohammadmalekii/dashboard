import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
export default function Content({ title, image }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 rounded-xl">
      <div className="relative">
        <img className="rounded-t-xl" src={image} alt="image" loading="lazy" />
        <EllipsisVerticalIcon className="h-8 w-8 absolute right-1 top-1 bg-white p-1 rounded-lg cursor-pointer hover:bg-slate-200" />
      </div>
      <p className="text-center py-4 text-slate-900 dark:text-white">{title}</p>
    </div>
  );
}
