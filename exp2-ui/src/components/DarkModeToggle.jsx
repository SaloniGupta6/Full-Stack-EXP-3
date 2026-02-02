import { Switch, Box, Typography } from "@mui/material";

export default function DarkModeToggle({ mode, toggleMode }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="body2">Dark Mode</Typography>
      <Switch checked={mode === "dark"} onChange={toggleMode} />
    </Box>
  );
}
