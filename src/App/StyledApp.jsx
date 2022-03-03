import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: 100vh;
  color: ${props => props.theme.palette.secondary.main};

  .page-h2{
    padding: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
    color: ${props => props.theme.palette.secondary.main};
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
    color: ${props => props.theme.palette.secondary.main};
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export default StyledApp;