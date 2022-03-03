import { styled } from '@mui/material/styles';
import { theme } from '@/theme';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.palette.primary.dark};
  color: ${props => props.theme.palette.secondary.main};

  button{
    color: ${props => props.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-left: 0;
  }
`;

export default StyledHeader;