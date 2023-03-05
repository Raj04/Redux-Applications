import "./App.css";
import SignInSide from "./SignIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./BlogLandingPage/Dashboard";
import { Routes, Route } from "react-router-dom";
import News from "./BlogLandingPage/News";
import SportsNews from "./BlogLandingPage/SportsNews";
import BusinessNews from "./BlogLandingPage/BusinessNews";
import { Users } from "./Users";
import User from "./Users/User";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />}>
          <Route index element={<BusinessNews />} />
          <Route path="sports" element={<SportsNews />} />
          <Route path="business" element={<BusinessNews />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path="/users/:userid" element={<User />} />
          {/* why can't we render the above comp by hitting the url */}
        </Route>
        <Route path="*" element={<SignInSide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
