import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';
import ScrollToTop from 'react-scroll-up';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import { Suspense } from 'react';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SharedLayout = () => {
  return (
    <PageContainer>
      <AppBar />
      <main>
      <Suspense>
             <Outlet />
      </Suspense>
   
        <ScrollToTop showUnder={160}>
          <span><BsFillArrowUpCircleFill fill="#6a1b9a" size={40}/></span>
        </ScrollToTop>
      </main>
      <Footer />
    </PageContainer>
  );
};
