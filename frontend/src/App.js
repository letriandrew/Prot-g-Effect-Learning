import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Record from './pages/Record';
import AboutUs from './pages/AboutUs';
import UserManual from './pages/UserManual';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';
import { AudioProvider } from './context/AudioContext';
import UserDashboard from './pages/UserDashboard';
import PrivateRouteUser from './privateRoutes/privateRouteUser';

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  return (
    <AuthProvider>
      <AudioProvider>
        <Router>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/userManual" element={<UserManual />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />

              <Route 
                path="/record" 
                element={
                  <PrivateRouteUser>
                    <Record />
                  </PrivateRouteUser>
                } 
              />

              <Route 
                path="/user-dashboard" 
                element={
                  <PrivateRouteUser>
                    <UserDashboard />
                  </PrivateRouteUser>
                } 
              />

            </Routes>
          </ThemeProvider>
        </Router>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
