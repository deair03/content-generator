import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import DetailedPage from "./pages/DetailedPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content/:slug" element={<DetailedPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
