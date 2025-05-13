import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Add your footer here */}
    </div>
  );
}
