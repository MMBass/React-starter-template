import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme';

import HomePage from '@pages/HomePage/HomePage';
import AboutPage  from '@pages/AboutPage/AboutPage';

import  StyledHeader  from '@components/Header/StyledHeader';
import  HeadTags  from '@components/HeadTags/HeadTags';
import  Layout  from '@components/Layout/Layout';

function App() {

  function init() {

  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Router>
      <HeadTags></HeadTags>
      <ThemeProvider theme={theme}>
        <StyledHeader></StyledHeader>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>} />
            </Routes>
          </Layout>
        {/* <Footer></Footer> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;