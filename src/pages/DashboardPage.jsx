import ProjectList from "../components/ProjectList";
import Profile from "../components/Profile";

export default function DashboardPage() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:items-start">
      <ProjectList />
      <Profile />
    </div>
  );
}
