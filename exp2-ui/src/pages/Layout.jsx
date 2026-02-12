import { Outlet } from "react-router-dom";
import AppNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "./Breadcrumbs";

function Layout({ darkMode, setDarkMode }) {
  return (
    <>
      <AppNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
