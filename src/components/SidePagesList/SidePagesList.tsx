import { NavLink } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowForward } from '@mui/icons-material';

interface pageItem {
  name: string,
  url: string,
}

const pages: pageItem[] = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }];

function SidePagesList() {
  return (
    <List>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={page.name}>
          <ListItem button key={page.name}>
            <ListItemText primary={page.name} />
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
