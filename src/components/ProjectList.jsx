import { ClockIcon, QueueListIcon } from "@heroicons/react/24/outline";
import Project from "./Project";
import { projectListData } from "../data";
import AddNewCategory from "./AddNewCategory";

export default function ProjectList() {
  console.log(projectListData);
  return (
    <div className="w-[55%] ml-6">
      <div className="flex justify-between items-center py-7">
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-between items-center gap-1 bg-slate-400 rounded-full w-16 p-1">
            <ClockIcon className="h-5 w-1/2 text-slate-600 hover:bg-slate-200 rounded-l-xl cursor-pointer transition-all duration-150" />
            <QueueListIcon className="h-5 w-1/2 bg-white rounded-r-xl cursor-pointer" />
          </div>
          <p>:نوع نمایش</p>
        </div>
        <p>:آثار من</p>
      </div>

      <div className="flex flex-col justify-start items-center gap-5">
        {projectListData.map((project) => (
          <Project
            key={project.projectID}
            title={project.projectTitle}
            showMore={project.showMore}
            contents={project.contents}
          />
        ))}
      </div>
      <AddNewCategory />
    </div>
  );
}
