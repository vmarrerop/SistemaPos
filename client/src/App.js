import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { HomePage } from "./pages/Services/HomePage";
import { LoginView } from "./pages/LoginView/LoginView";
import { PostProvider } from "./context/postContext";
import { Inventario } from "./pages/Inventario/Inventario";
import { Toaster } from "react-hot-toast";
import './App.scss';

function App() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full">
        <PostProvider>
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/Inventario" element={<Inventario />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
    </>
  );
}

export default App;
