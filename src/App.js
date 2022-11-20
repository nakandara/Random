
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignInSide from "./components/Logins/SignInSide";
import SignUpSide from "./components/Logins/SignUpSide";


function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    
    <div>
       {/* <SignInSide/> */}
    <ColorModeContext.Provider value={colorMode}>
       
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
        <div className="app">
         
          {/* <Sidebar /> */}
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/signup" element={<SignUpSide />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
 
}

export default App;
