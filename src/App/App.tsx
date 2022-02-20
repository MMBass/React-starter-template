import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { StyledComponent } from '@emotion/styled';

import { theme } from '../theme';

import HeadTags from '@components/HeadTags/HeadTags';
import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Drawer } from '@components/Drawer/StyledDrawer';

import HomePage from '@pages/HomePage/HomePage';
import AboutPage from '@pages/AboutPage/AboutPage';
import { default as NoMatchPage }  from '@pages/NoMatchPage/StyledNoMatchPage';

type AnchorType = 'top' | 'left' | 'bottom' | 'right';
type ChildType = JSX.Element | StyledComponent<any>;

function App({ className }) {

  // TODO move to sideBar/drawer context:
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [sideBarAnchor, setSideBarAnchor] = useState<AnchorType>('left');
  const [SideBarChild, setSideBarChild] = useState<any>(null);

  function init() {

  }

  useEffect(() => {
    init();
  }, []);


  const toggleDrawer = (anchor: AnchorType, open: boolean, child?: ChildType) => {
    setSideBar(open);
    setSideBarAnchor(anchor);
    setSideBarChild(child || null);
  }

  return (
    <div className={className}>
      <Router>
        <HeadTags></HeadTags>
        <ThemeProvider theme={theme}>
          <Header className="header" toggleDrawer={toggleDrawer}></Header>
          {(sideBar && SideBarChild) && <Drawer className="side-bar" toggleDrawer={toggleDrawer} anchor={sideBarAnchor}>
            <SideBarChild></SideBarChild>
          </Drawer>}
          <Layout>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/about"} element={<AboutPage />} />
              <Route path="*" element={<NoMatchPage className={'no-match-page'}/>} />
            </Routes>
          </Layout>
          {/* <Footer></Footer> */}

        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;