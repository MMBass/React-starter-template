import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: 100vh;
  background-color: ${props => props.theme.palette.primary.light};
`;

export default StyledLayout;