import React from 'react';

import BannerContextProvider from './BannerContext';
import DrawerContextProvider from './DrawerContext';

const components = [BannerContextProvider,DrawerContextProvider];

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