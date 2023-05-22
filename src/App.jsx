import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Landing from "./views/Landing/Landing";
import Menu from "./Layouts/MenuLayout";
import Monitoring from "./views/monitoring/monitoring";
import Devices from "./views/devices/Devices";
import Alarms from "./views/alarms/Alarms";
import Graphics from "./views/graphics/Graphics";
import Consume from "./views/consume/Consume";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu children={<Dashboard />} />} />
          <Route
            path="/monitoring"
            element={<Menu children={<Monitoring />} />}
          />
          <Route path="/devices" element={<Menu children={<Devices />} />} />
          <Route path="/alarms" element={<Menu children={<Alarms />} />} />
          <Route path="/graphics" element={<Menu children={<Graphics />} />} />
          <Route path="/consume" element={<Menu children={<Consume />} />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
