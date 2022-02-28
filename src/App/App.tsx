import { useEffect, useState, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledComponent } from '@emotion/styled';

import { theme } from '../theme';
import ContextComposer from '../context/ContextComposer';
import { SideBarContext } from '../context/SideBarContext';

import HeadTags from '@components/HeadTags/HeadTags';
import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Drawer } from '@components/Drawer/StyledDrawer';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as AboutPage } from '@pages/AboutPage/StyledAboutPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';

type AnchorType = 'top' | 'left' | 'bottom' | 'right';
type ChildType = JSX.Element | StyledComponent<any>;

function App({ className }) {
  const sideBarContext = useContext(SideBarContext);

  function init() {

  }

  useEffect(() => {
    init();
  }, []);


  const toggleDrawer = (anchor: AnchorType, open: boolean, child?: ChildType) => {
    sideBarContext.setSideBar()
  }

  return (
    <div className={className}>
      <ContextComposer>
        <Router>
          <HeadTags></HeadTags>
          <MuiThemeProvider theme={theme}>
            <Header className="header" toggleDrawer={toggleDrawer}></Header>
            {(sideBarContext?.display && sideBarContext?.sideBarChildren) && <Drawer className="side-bar" toggleDrawer={toggleDrawer} anchor={sideBarContext?.anchor}>
              {sideBarContext?.sideBarChildren}
            </Drawer>}
            <Layout>
              <Routes>
                <Route path={"/"} element={<HomePage className={'page'} />} />
                <Route path={"/about"} element={<AboutPage className={'page'} />} />
                <Route path="*" element={<NoMatchPage className={'page'} />} />
              </Routes>
            </Layout>
            {/* <Footer></Footer> */}
          </MuiThemeProvider>
        </Router>
      </ContextComposer>
    </div>
  );
}

export default App;