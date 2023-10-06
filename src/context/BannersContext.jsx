/* !!! Important: When listening to updates from this context,
you may have to put useEffect in the target component
(and depends on [nameContext]) to force rerender before updating other states */

/* In order to createBanner you should create a container for it
in the componenet you want to display.
example:
{(bannersContext.{{YOUR BANNER FUTURE NAME}}?.open) &&
    {{HERE PUT THE CHILDS, E.T.C: <Alert> OR <Snackbar> OR IT CAN BE ANY html,
    AND USE THE severity/title/message IF NEEDED}}
} */

import React, { useState } from 'react';

export const BannersContext = React.createContext(undefined);

export default function BannersContextProvider(props) {
    const [banners, setBanners] = useState({
        main: { open: true, severity: "warning", title: "App In Building!", message: "This is a template. create a beautiful apps from that." },
        snackbar: { open: true, severity: "success", title: "", message: "This is a Snackbar!" },
    });

    const createBanner = (name, severity, title, mesaage) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: undefined });
        }
        setBanners({ ...banners, [name]: { open: false, severity: severity || "success", title: title || "", mesaage: mesaage || "" } });
    }

    const openBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: true } });
        } else {
            console.error("Banner" + name + "does'nt exist");
        }
    }

    const closeBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: false } });
        } else {
            console.error("Banner" + name + "does'nt exist");
        }
    }

    const actions = { createBanner, openBanner, closeBanner };

    return (
        <BannersContext.Provider value={{ ...banners, ...actions }}>
            {props.children}
        </BannersContext.Provider>
    );
};
