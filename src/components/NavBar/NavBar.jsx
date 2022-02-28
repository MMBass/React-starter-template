import { NavLink } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar({className}) {
  
  const pages = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }];

  return (
    <Box className={className} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
  );
}

export default NavBar;
