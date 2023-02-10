import Links from "./Links";

export default function Sidebar() {
  return (
    <aside className="bg-white dark:bg-gray-800 relative">
      <div className="flex flex-col gap-5 p-3.5">
        <Links />
      </div>
    </aside>
  );
}
