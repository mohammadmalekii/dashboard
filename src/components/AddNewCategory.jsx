import { FolderPlusIcon } from "@heroicons/react/24/outline";

export default function AddNewCategory() {
  return (
    <button className="text-blue-500 bg-white rounded-full py-2 px-3 flex justify-center gap-2 mt-4 ml-auto hover:bg-blue-500 hover:text-white transition-colors duration-200">
      <FolderPlusIcon className="w-7 h-7" />
      <p>افزودن دسته جدید</p>
    </button>
  );
}
