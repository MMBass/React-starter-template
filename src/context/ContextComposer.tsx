import React from 'react';

import BannerContextProvider from './BannerContext';
import SideBarContextProvider from './SideBarContext';

interface Props {
    children: React.ReactNode;
}

type component = React.JSXElementConstructor<React.PropsWithChildren<any>>;

const components:Array<component> = [BannerContextProvider,SideBarContextProvider];

export default function ContextComposer(props: Props) {
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