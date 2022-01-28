import React, { useState, useEffect } from "react";
import { Paper, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    const themeType = localStorage.getItem("dark") || "dark";
    if (themeType != "dark") {
      setDarkMode(false);
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("dark", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        style={{ height: "100vh", margin: 0 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
            m: 1,
          }}
        >
          <Switch checked={darkMode} onChange={changeTheme} />
          <Typography variant="h4" gutterBottom component="div" mt="4">
            {darkMode ? "Dark" : "Light"} Mode Handler
          </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Home;
