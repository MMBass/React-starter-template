import React from 'react';

const banner = {
    display: false,
    content: '',
}

const BannerContext = React.createContext(banner);

export default function BannerContextProvider(props) {
    return (
        <BannerContext.Provider value={banner}>
          {props.children}
        </BannerContext.Provider>
    );
};