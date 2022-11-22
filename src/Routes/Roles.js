import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import Dashboard from '../scenes/dashboard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import SignInSide from '../components/Logins/SignInSide';
import SignUpSide from '../components/Logins/SignUpSide';
import { userAuthContext } from '../context/UserAuthContext'
import ProtectedRoute from './ProtectedRoute';
import App from '../App';

// const Roles = () => {
//     const [theme, colorMode] = useMode();
//     return (

//         <div>
//             <SignInSide />
//             <ColorModeContext.Provider value={colorMode}>

//             </ColorModeContext.Provider>
//         </div>
//     )
// }

// export default Roles


function Roles() {
    const [theme, colorMode] = useMode();
    // const [isSidebar, setIsSidebar] = useState(true);

    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );

}

export default Roles;