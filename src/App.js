import { Route, Routes } from 'react-router-dom';
import { NoMatch } from './components/pages/NoMatch/NoMatch';
import './App.css';
import { Home } from './components/pages/Home/Home';
import { Statistics } from './components/pages/Statistics/Statistics';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Main } from './components/pages/Main/Main';
import React from 'react';
import { Teams } from './components/pages/Teams/Teams';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='app-container'>
        <header className='app-header'>
          <h2>Football App</h2>
        </header>

        <main className='main-container'>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path="" element={<Home />}></Route>
              <Route path="league/:leagueId" element={<Teams />}></Route>
              <Route path="league/:leagueId/team/:teamId" element={<Statistics />}></Route>
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
      </div>
      <footer className='footer'>
        <small>by Piotur D. AD. July 2022</small>
      </footer>
</ThemeProvider>

  );
}

export default App;


<main>This app is using the dark mode</main>