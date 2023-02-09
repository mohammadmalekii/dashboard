import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function ProfileTitle({ title, children }) {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center pb-4">
        <PencilSquareIcon className="h-7 w-7 shrink-0 text-slate-400 dark:text-white" />
        <span className="w-full border border-gray-300 m-2"></span>
        <p className="min-w-max">{title}</p>
      </div>
      {children}
    </div>
  );
}
