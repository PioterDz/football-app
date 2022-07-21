import { Route, Routes } from 'react-router-dom';
import { NoMatch } from './components/pages/NoMatch/NoMatch';
import './App.css';
import { Home } from './components/pages/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Teams } from './components/pages/Teams/Teams';
import { Main } from './components/pages/Main/Main';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
        <header className='App-header'>
          <h2>Football App</h2>
        </header>

        <main className='main-container'>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path="" element={<Home />}></Route>
              <Route path="team/:leagueId" element={<Teams />}></Route>
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>

        <footer className='footer'>
          <small>by Piotur D. AD. July 2022</small>
        </footer>
      </div>
</ThemeProvider>

  );
}

export default App;


<main>This app is using the dark mode</main>