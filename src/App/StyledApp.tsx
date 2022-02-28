import { styled } from '@mui/material/styles';

import App from './App';

const StyledApp = styled(App)`
  height: 100vh;
  background-color: #00AECC;
  color: #F4F5F7;

  .page-h2{
    margin: 80px 0px 0px 35px;
    font-size: 40px;
    font-weight: 300;
  }

  .page-h3{
    margin: 15px 0px 0px 35px;
    font-size: 35px;
    font-weight: 300;
  }


  a {
    text-decoration: none;
  }
`;

export default StyledApp;