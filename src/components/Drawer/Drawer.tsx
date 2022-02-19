import { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { StyledComponent } from '@emotion/styled';
import Layout from '@components/Layout/Layout';

type PermanentType = "temporary" | "permanent" | "persistent";
type AnchorType = 'top' | 'left' | 'bottom' | 'right';
type ChildType = JSX.Element | StyledComponent<any>;

interface DrawerProps {
  permanent?: PermanentType,
  anchor: AnchorType,
  children: ChildType | null,
  toggleDrawer: (anchor: AnchorType, open: boolean, child?: ChildType) => void,
  className: string,
} // todo must come from context

interface drawerState {
  permanent: PermanentType,
  open: boolean,
  anchor: AnchorType,
} // todo must also come from same context

function SideBar({ className, ...props }: DrawerProps) {

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
