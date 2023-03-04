import "./App.css";
import SignInSide from "./SignIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./BlogLandingPage/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<SignInSide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
