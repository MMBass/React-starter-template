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

    const toggleBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: !banners[name].open } });
        } else {
            console.error("Banner does'nt exist. Name: " + name);
        }
    }

    const actions = { createBanner, toggleBanner };

    return (
        <BannersContext.Provider value={{ ...banners, ...actions }}>
            {props.children}
        </BannersContext.Provider>
    );
};
