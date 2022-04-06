import { useEffect, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import HeadTags from '@components/HeadTags/HeadTags';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { LinearProgress, CircularProgress, Snackbar, Alert, AlertTitle } from '@mui/material';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as AboutPage } from '@pages/AboutPage/StyledAboutPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';


function App({ className }) {
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  function init() {
    // call basic data from api, set modes etc.
  }

  useEffect(() => {
    init();
  }, []);

  const handleCloseSnackbar = (name) => {
    bannersContext.toggleBanner(name);
  }

  return (
    <div className={className}>
      <Router>
        <HeadTags></HeadTags>
        <Header className="header"></Header>
        {(bannersContext.main.open) &&
          <Alert severity="warning">
            <AlertTitle>{bannersContext.main.title}</AlertTitle>
            {bannersContext.main.message}
          </Alert>
          // use in specific components, or remove
        }
        <Layout>
          <Routes>
            <Route path={"/"} element={<HomePage className={'page'} />} />
            <Route path={"/about"} element={<AboutPage className={'page'} />} />
            <Route path="*" element={<NoMatchPage className={'page'} />} />
          </Routes>
        </Layout>

        {/*dynamic global elements*/}
        {(drawerContext.open && drawerContext.child) &&
          <Drawer className="drawer"></Drawer>
        }
        {(loadersContext.main.open) &&
          <LinearProgress color={loadersContext.main.color || "primary"} />
        }
        {(loadersContext.circular.open) &&
          <CircularProgress color={loadersContext.main.color || "primary"} />
          // use in specific component, or remove
        }
        {(bannersContext.snackbar.open) &&
          <Snackbar open={bannersContext.snackbar.open} autoHideDuration={6000} onClose={() => { }}>
            <Alert onClose={() => { handleCloseSnackbar('snackbar') }} severity={bannersContext.snackbar.severity} sx={{ width: '100%' }}>
              {bannersContext.snackbar.message}
            </Alert>
          </Snackbar>
        }
        <Dialog></Dialog>
        {/* <Modal> */}
        {/* Modal must have a children */}
        {/* </Modal> */}
        {/*end dynamic global elements*/}

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;