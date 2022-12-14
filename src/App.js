import { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Topbar from "./app/global/Topbar";
import Sidebar from "./app/global/Sidebar";
import Dashboard from "./app/components/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignInSide from "./base/Logins/SignInSide";
import School from './app/components/team/School'
import Footer from './app/global/Footer';
import ProtectedRoute from "./base/routes/ProtectedRoute";
import "./styles.scss"
import Schools from './app/components/team/Schools';
import { userAuthContext } from './base/context/UserAuthContext';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  const [theme, colorMode] = useMode();
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const contexAsync = useContext(userAuthContext);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  useEffect(() => {

    if (window.location.pathname === "/dashboard") {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`app ${toggled ? 'toggled' : ''}`} >
          <Sidebar
            image={image}
            collapsed={collapsed}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
          />
          {isLogin ? <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <MenuIcon />
          </div> : null}

          <main className="content">
            <Topbar />
            <Routes>


              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/school" element={<School />} />
              <Route path="/schools" element={<Schools />} />

              <Route path="/" element={<  SignInSide image={image} handleImageChange={handleImageChange} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;