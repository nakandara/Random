import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Logouticon from "./Logouticon";
import { userAuthContext } from "../../base/context/UserAuthContext";

const Topbar = () => {
  const theme = useTheme();
  const ABCD = useContext(userAuthContext);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isLoginTopba, setIsLoginTopba] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let selectRoleuser = JSON.parse(localStorage.getItem("user"));
    if (!user && ABCD?.user) {
      user = ABCD.user;
      selectRoleuser = ABCD.user;
      setIsLoginTopba(true);
    }

    if (user) {
      setIsLoginTopba(true);
    }
  }, [ABCD?.user?.token]);

  return (
    <>
    
      {isLoginTopba ? (
        <Box display="flex" justifyContent="space-between" p={0}>
          {/* SEARCH BAR */}
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton> */}
          </Box>

          {/* ICONS */}
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <IconButton>
              <Logouticon />
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Topbar;
