import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode, MdMenu } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { routes } from '../../configs/routes.config';

interface NavbarProps {
  authenticated: boolean;
  theme: PaletteMode;
  setTheme: (value: PaletteMode | ((val: PaletteMode) => PaletteMode)) => void;
}

const NavbarLinks: FC = () => {
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {routes.map(({ path, label, icon }) => (
            <ListItem button key={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

const Navbar: FC<NavbarProps> = ({ authenticated, setTheme, theme }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const drawerWidth = 240;
  const defaultTitle = 'BBE Dashboard';
  const pageTitle = routes.find(({ path }) => path === pathname)?.label || defaultTitle;

  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const handleLogout = async (): Promise<void> => {
    await axios.get('/auth/logout');
    window.location.reload();
  };

  useEffect(() => {
    document.title = pageTitle !== defaultTitle ? `${defaultTitle} | ${pageTitle}` : defaultTitle;
  }, [pageTitle]);

  return (
    <>
      <AppBar position="fixed" enableColorOnDark sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Hidden smUp>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={(theme) => ({
                  marginRight: theme.spacing(1),
                })}
              >
                <MdMenu />
              </IconButton>
            </Hidden>
            <Typography variant="h6" noWrap>
              {pageTitle}
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="secondary"
              icon={<MdLightMode color="white" />}
              checkedIcon={<MdDarkMode color="white" />}
              onClick={toggleTheme}
              checked={theme === 'dark'}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {authenticated && (
        <>
          <Hidden smUp>
            <SwipeableDrawer
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              open={open}
              onOpen={toggleDrawer}
              onClose={toggleDrawer}
              draggable
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              <NavbarLinks />
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              <NavbarLinks />
              <Divider />
              <Button onClick={handleLogout}>Logout</Button>
            </Drawer>
          </Hidden>
        </>
      )}
    </>
  );
};

export default Navbar;
