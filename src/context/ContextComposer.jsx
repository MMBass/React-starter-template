import React from 'react';

import DrawerContextProvider from './DrawerContext';
import BannersContextProvider from './BannersContext';
import LoadersContextProvider from './LoadersContext';

const components = [DrawerContextProvider, BannersContextProvider, LoadersContextProvider];

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