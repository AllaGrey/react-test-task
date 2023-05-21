import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledNavLink, Footer, FooterDetails } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <Outlet/>
        </main>      
        <Footer>
          <FooterDetails href='https://github.com/AllaGrey' noopener noreferrer nofollow >Created by Alla Grey </FooterDetails>
        </Footer>
      </Suspense>
    </div>
  );
};