import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
