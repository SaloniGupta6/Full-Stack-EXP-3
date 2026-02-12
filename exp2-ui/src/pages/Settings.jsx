import { useState } from "react";
import { motion } from "framer-motion";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card"
    >
      <h3 className="fw-bold mb-4">⚙️ Account Settings</h3>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>🌙 Dark Mode</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>🔔 Notifications</span>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>

      <div className="mt-4 text-center">
        <button className="premium-btn">Save Changes</button>
      </div>
    </motion.div>
  );
}

export default Settings;
