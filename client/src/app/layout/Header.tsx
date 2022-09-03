import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header({
  darkMode,
  handleThemeChange,
}: {
  darkMode: boolean;
  handleThemeChange: () => void;
}) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      {/*mb: margin bottom: 4 them spacing (default each is 8px) => 32 pixcels*/}
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
