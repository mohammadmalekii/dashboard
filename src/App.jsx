import ProjectList from "./components/ProjectList";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="bg-slate-200 dark:bg-slate-900">
      <Header />
      <div className="flex justify-between pt-[88px]">
        <ProjectList />
        <Profile />
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
