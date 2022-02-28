import { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Layout from '@components/Layout/Layout';

function SideBar({ className, ...props }) {

  const [drawerState, setDrawerState] = useState<drawerState>({
    permanent: "temporary",
    open: true,
    anchor: 'left',
  }); // todo suppose to be in drawer context


  return (
    <Drawer
      className={className}
      anchor={drawerState.anchor}
      open={drawerState.open}
      variant={drawerState.permanent}
      onClose={()=>{props.toggleDrawer(drawerState.anchor, false)}}
    >
      <Box
        className='drawer-layout'
        sx={{ width: drawerState.anchor === 'top' || drawerState.anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={()=>{props.toggleDrawer(drawerState.anchor, false)}}
      >
      {props.children}
      </Box>
    </Drawer>
  );
}

export default SideBar;
