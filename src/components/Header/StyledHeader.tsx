import { styled } from '@mui/material/styles';

import Header from './Header';

const StyledHeader = styled(Header)`
    width: 100px;
    height: 100px;
    background: black;
    
    a {
    text-decoration: none;
    }
`;

export default StyledHeader;