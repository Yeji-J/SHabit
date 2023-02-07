import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdminVideoContainer from '../components/Admin/AdminVideoContainer';
// import AdminDashboard from '../components/Admin/AdminDashboard';
import MoveToAdmin from '../components/Admin/MoveToAdmin';
import { loadEffect } from '../components/common/animation';
import LogoutButton from '../components/Main/LogoutButton';
import { theme } from '../styles/GlobalStyles';

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const style = {
    backgroundColor: theme.color.primary,
    color: theme.color.secondary,
  };

  return (
    <PageWrapper>
      <ContainerWrapper>
        <Tab
          onClick={() => {
            navigate('/admin');
          }}
          style={currentPath === '/admin' ? style : {}}
        >
          영상
        </Tab>
        <Tab
          onClick={() => {
            navigate('/admin/settings');
          }}
          style={currentPath === '/admin/settings' ? style : {}}
        >
          시간/문구
        </Tab>
        <Container>
          <Wrapper>
            <MoveToAdmin />
            <LogoutButton></LogoutButton>
            <Outlet />
          </Wrapper>
        </Container>
      </ContainerWrapper>
    </PageWrapper>
  );
};

export default AdminPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: default;
  }
`;
const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > button:first-child {
    position: absolute;
    top: -8%;
    left: 0;
  }

  & > button:nth-child(2) {
    position: absolute;
    top: -8%;
    /* left: 11.5%; */
    left: 8.1rem;
  }

  & > div:last-child {
  }
`;

const Container = styled.div`
  width: 70rem;
  height: 36rem;
  background-color: ${theme.color.whiteColor};
  border-radius: 0 1.5rem 1.5rem;
  padding: 2rem;
  box-shadow: 0 0.2rem 0.5rem ${theme.color.grayColor};
  z-index: 0;
`;

const Tab = styled.button`
  background-color: ${theme.color.whiteColor};
  color: ${theme.color.grayColor};
  font-size: 1.1rem;
  width: 8rem;
  font-weight: bold;
  line-height: 0.7rem;
  padding: 1.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 0.2rem 0.5rem ${theme.color.lightGrayColor};
`;

const Wrapper = styled.div``;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 2rem 0;

  & > div:first-child {
    width: 40%;
  }

  & > div:last-child {
    width: 56.5%;
  }
`;

const HeatmapWrapper = styled.div`
  border: 0.2rem solid ${theme.color.secondary};
  border-radius: 1.5rem;
  box-shadow: 0 0.1rem 0.5rem ${theme.color.grayColor};

  display: flex;
  flex-direction: column;

  animation: 0.8s ease-in ${loadEffect.up};
  position: relative;

  & > div:nth-child(1) {
    margin: 1rem 1.5rem 0 1rem;
  }

  & > div:nth-child(2) {
    position: absolute;
    bottom: 9%;
    left: 80%;
  }
`;
