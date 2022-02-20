import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { StyledComponent } from '@emotion/styled';

interface pageItem {
  name: string,
  url: string,
}

type AnchorType = 'top' | 'left' | 'bottom' | 'right';
type ChildType = JSX.Element | StyledComponent<any>;

interface HeaderProps {
  className: string,
  toggleDrawer: (anchor: AnchorType, open: boolean, child?: ChildType) => void,
}

const pages: pageItem[] = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }];

const Header = ({ className, ...props }: HeaderProps) => {

  const handleOpenNavMenu = (): void => {
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={page.url} key={page.name}>
                <Button
                  sx={{ my: 2, color: 'black' }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;