import { styled } from '@mui/material/styles';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: #2D4260;
  color: #F4F5F7;

  button{
    color: #F4F5F7;
  }

  .MuiBox-root{
    justify-content: flex-end;
  }
`;

export default StyledHeader;