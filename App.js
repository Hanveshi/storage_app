import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StoreListPage from './pages/StoreListPage';
import RatingPage from './pages/RatingPage';
import { CssBaseline, ThemeProvider, createTheme, GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a2980',
      contrastText: '#fff',
    },
    secondary: {
      main: '#26d0ce',
      contrastText: '#fff',
    },
    background: {
      default: 'linear-gradient(120deg, #1a2980 0%, #26d0ce 100%)',
      paper: 'rgba(255,255,255,0.85)',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    fontWeightBold: 800,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 16,
          padding: '10px 28px',
          boxShadow: '0 2px 8px 0 rgba(26,41,128,0.08)',
          transition: 'all 0.18s',
          '&:hover': {
            background: 'linear-gradient(90deg, #26d0ce 0%, #1a2980 100%)',
            color: '#fff',
            transform: 'scale(1.07)',
            boxShadow: '0 4px 16px 0 rgba(38,208,206,0.18)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: 'rgba(255,255,255,0.85)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1a2980 0%, #26d0ce 100%)',
          boxShadow: '0 4px 24px 0 rgba(26,41,128,0.10)',
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        body: {
          background: 'linear-gradient(120deg, #1a2980 0%, #26d0ce 100%)',
          minHeight: '100vh',
        },
        '#root': {
          minHeight: '100vh',
        },
      }} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/owner" element={<StoreOwnerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/stores" element={<StoreListPage />} />
          <Route path="/rate" element={<RatingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
