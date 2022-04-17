import { Role } from '@bbe/types';
import { hasPermission } from '@bbe/utils';
import { Box, createTheme, CssBaseline, PaletteMode, ThemeProvider, Toolbar } from '@mui/material';
import { FC, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { env } from './configs/env.config';
import { routes } from './configs/routes.config';
import ForbiddenPage from './pages/403';
import NotFound from './pages/404';
import LoginPage from './pages/login';
import { useAuth } from './services/auth.service';
import useLocalStorage from './utils/localstorage.util';

const App: FC = () => {
  const { data } = useAuth();
  const authenticated = !!data?.authenticated;
  const role = data?.role || Role.User;
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
      <Router basename={env.NODE_ENV === 'production' ? '/admin' : '/'}>
        <Box display="flex" minHeight="100vh">
          <Navbar authenticated={authenticated} role={role} setTheme={setMode} theme={mode} />
          <Box component="main" flexGrow="1" padding={3} position="relative">
            <Toolbar />
            <Switch>
              {routes.map(({ path, component }) => {
                if (!authenticated) {
                  return <Route component={LoginPage} key={path} />;
                }

                if (!hasPermission(role, Role.Department)) {
                  return <Route component={ForbiddenPage} key={path} />;
                }

                return <Route component={component} path={path} exact key={path} />;
              })}
              <Route component={NotFound} />
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
