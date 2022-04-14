import { DarkMode as MoonIcon, LightMode as SunIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
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
  Toolbar,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

const Navbar: FC<NavbarProps> = ({ authenticated, setTheme, theme }) => {
  const [open, setOpen] = useState<boolean>(false);
  const drawerWidth = 240;

  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <>
      <AppBar position="fixed" enableColorOnDark sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Hidden smUp>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={(theme) => ({
                  marginRight: theme.spacing(1),
                })}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" noWrap>
              BBE Dashboard
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="secondary"
              icon={<SunIcon sx={{ color: 'white' }} />}
              checkedIcon={<MoonIcon sx={{ color: 'white' }} />}
              onClick={toggleTheme}
              checked={theme === 'dark'}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {authenticated && (
        <>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              open={open}
              onClose={toggleDrawer}
              draggable
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              <NavbarLinks />
            </Drawer>
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
            </Drawer>
          </Hidden>
        </>
      )}
    </>
  );
};

export default Navbar;
