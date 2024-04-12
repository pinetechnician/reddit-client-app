import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';


export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
