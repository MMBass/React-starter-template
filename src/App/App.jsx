import { useEffect, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from '../theme';
import { DrawerContext } from '@context/DrawerContext';

import HeadTags from '@components/HeadTags/HeadTags';
import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Drawer } from '@components/Drawer/StyledDrawer';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as AboutPage } from '@pages/AboutPage/StyledAboutPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';


function App({ className }) {
  const drawerContext = useContext(DrawerContext);

  function init() {

  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={className}>
        <Router>
          <HeadTags></HeadTags>
          <MuiThemeProvider theme={theme}>
            <Header className="header"></Header>
            {(drawerContext.open && drawerContext.child) && 
              <Drawer className="drawer">
                {/* <drawerContext.child></drawerContext.child> */}
              </Drawer>
            }
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
    </div>
  );
}

export default App;