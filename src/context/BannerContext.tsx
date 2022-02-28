import React from 'react';

interface Banner{
    display: Boolean,
    content: String,
}

interface Props {
    children: React.ReactNode;
}

const banner = {
    display: false,
    content: '',
}

const BannerContext = React.createContext(banner);

export default function BannerContextProvider(props: Props) {
    return (
        <BannerContext.Provider value={banner}>
          {props.children}
        </BannerContext.Provider>
    );
};