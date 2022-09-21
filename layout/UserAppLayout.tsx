import React from 'react';
import NSVFooter from '../components/layout/NSVFooter';
import NSVNavBar from '../components/layout/NSVNavBar';

type UserAppLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const UserAppLayout: React.FC<UserAppLayoutProps> = (props) => (
  <>
    <NSVNavBar />
    {props.children}
    <NSVFooter />
  </>
);

export default UserAppLayout;
