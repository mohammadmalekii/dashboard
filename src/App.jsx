import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ConversationsPage from "./pages/ConversationsPage";
import InvoiceIssuancePage from "./pages/InvoiceIssuancePage";
import ProfilePage from "./pages/ProfilePage";
import JoinToContemoPage from "./pages/JoinToContemoPage";
import SendingInvitationPage from "./pages/SendingInvitationPage";
import ShowResultPage from "./pages/ShowResultPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <main className="bg-slate-200 dark:bg-slate-900 transition-all duration-500 ease-in-out min-w-min">
        <Header />
        <div className="flex justify-between pt-[88px]">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/conversations" element={<ConversationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/invoice-issuance" element={<InvoiceIssuancePage />} />
            <Route path="/join-to-contemo" element={<JoinToContemoPage />} />
            <Route path="/show-result" element={<ShowResultPage />} />
            <Route
              path="/sending-invitation"
              element={<SendingInvitationPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Sidebar />
        </div>
      </main>
    </Router>
  );
}

export default App;
