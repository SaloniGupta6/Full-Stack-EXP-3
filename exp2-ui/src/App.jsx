import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./theme";

import AppNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ComponentsDemo from "./pages/ComponentsDemo";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/components" element={<ComponentsDemo />} />

            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
