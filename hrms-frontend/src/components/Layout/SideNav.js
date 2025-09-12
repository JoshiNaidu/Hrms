import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import SonusHrms from '../../assets/SonusHrms.png';
import { IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Define HRMS menu items with labels and icons
const hrmsMenuItems = [
  { label: 'Dashboard', icon: <HomeIcon /> },
  { label: 'Employees', icon: <PeopleIcon /> },
  { label: 'Attendance', icon: <EventIcon /> },
  { label: 'Tasks', icon: <AssignmentIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
];

export default function SideNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', p: 2 }}>
        <img src={SonusHrms} alt="HRMS Logo" width={150} height="50" />
      </Box>
      <Divider />

      {/* HRMS menu items */}
      <List>
        {hrmsMenuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button
        onClick={toggleDrawer(true)}
        startIcon={<KeyboardDoubleArrowLeftIcon />}
        sx={{ mb: 2 }}
      >
        Explore Menu
      </Button> */}

      <Tooltip title="Explore Menu">
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            zIndex: 1300,
            bgcolor: '#550000',
            color: '#fff',
            '&:hover': { bgcolor: '#550000' },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
