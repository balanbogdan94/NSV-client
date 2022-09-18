import React from 'react';
import NSVNavBar from '../components/layout/NSVNavBar';

type UserAppLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const UserAppLayout: React.FC<UserAppLayoutProps> = (props) => (
  <>
    <NSVNavBar />
    {props.children}
  </>
);

export default UserAppLayout;
