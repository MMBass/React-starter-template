import { styled } from '@mui/material/styles';
import Drawer from './Drawer';

const StyledDrawer = styled(Drawer)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background: #0092AB; 
    color: #F4F5F7;
  }

  svg{
    color: #F4F5F7;
  }

  a{
    color: #F4F5F7;
    text-decoration: none;
  }
`;

export default StyledDrawer;