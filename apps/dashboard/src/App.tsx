import { Box, createTheme, CssBaseline, PaletteMode, ThemeProvider, Toolbar } from '@mui/material';
import { FC, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './configs/routes.config';
import LoginPage from './pages/login';
import { useAuth } from './services/auth.service';
import useLocalStorage from './utils/localstorage.util';

const App: FC = () => {
  const { data } = useAuth();
  const authenticated = !!data?.authenticated;
  const [mode, setMode] = useLocalStorage<PaletteMode>('theme', 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#e8175d',
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex">
          <Navbar authenticated={authenticated} setTheme={setMode} theme={mode} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
              {routes.map(({ path, component }) => {
                if (!authenticated) {
                  return <Route component={LoginPage} key={path} />;
                }

                return <Route component={component} path={path} exact key={path} />;
              })}
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
