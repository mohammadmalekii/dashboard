import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="App bg-slate-300 h-screen">
      <Header />
      <div className="flex justify-between pt-[88px]">
        <h1>Dashboard</h1>
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
