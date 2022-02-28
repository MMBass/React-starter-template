import React, { useState } from 'react';

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

