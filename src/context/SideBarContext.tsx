import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { StyledComponent } from '@emotion/styled';

type AnchorType = 'top' | 'left' | 'bottom' | 'right';

export const SideBarContext = React.createContext(undefined);

export default function SideBarContextProvider(props) {
    const [sideBar, setSideBar] = useState();

    // useEffect(()=>{
    //     setSideBar(
    //         {
    //             display: false,
    //             anchor: 'left',
    //         }
    //     )
    // },[]);

    return (
        <SideBarContext.Provider value={{sideBar,setSideBar}}>
            {props.children}
        </SideBarContext.Provider>
    );
};

