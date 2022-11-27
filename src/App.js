import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./app/global/Topbar";
import Sidebar from "./app/global/Sidebar";
import Dashboard from "./app/components/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignInSide from "./base/Logins/SignInSide";
import School from './app/components/team/School'
import ProtectedRoute from "./base/routes/ProtectedRoute";
import "./styles.scss"

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/school" element={<School />} />
              </Route>

              <Route path="/" element={<SignInSide />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;