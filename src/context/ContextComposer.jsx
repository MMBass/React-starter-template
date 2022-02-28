import React from 'react';

import BannerContextProvider from './BannerContext';
import SideBarContextProvider from './SideBarContext';


const components = [BannerContextProvider,SideBarContextProvider];

export default function ContextComposer(props) {
    return (
      <>
        {
          components.reduceRight((acc, Comp) => {
            return <Comp>{acc}</Comp>;
          }, props.children)
        }  
      </>
    );
};