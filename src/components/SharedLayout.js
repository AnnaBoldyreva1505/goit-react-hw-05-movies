import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import styled from 'styled-components';
import { Footer } from './Footer/Footer';

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
        <Outlet />
      </main>
      <Footer />
    </PageContainer>
  );
};
