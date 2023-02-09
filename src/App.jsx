import Header from "./components/Header";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="bg-slate-200">
      <Header />
      <div className="flex justify-between pt-[88px]">
        <h1 className="w-[55%]">Dashboard</h1>
        <Profile />
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
