import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { default as NavBar } from '@components/NavBar/StyledNavBar';

const Header = ({ className, ...props }) => {

  const handleOpenNavMenu = () => {
    props.toggleDrawer('left', true, SidePagesList);
  };

  return (
    <AppBar position="static" className={className}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: 'flex' }}
          >
            React Starter Template
          </Typography>

          <NavBar className="nav-bar"></NavBar>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;