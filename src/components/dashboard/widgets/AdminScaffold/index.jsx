import React from 'react';
import SideNav from '../../_Partials/SideNav';
// import Header from '../../_partials/Header';

const AdminScaffold = ({ children }) => {
  return (
    <div className="flex flex-grow w-full">
      <SideNav />

      <div className="flex flex-col bg-accent-light max-w-[83.333333%] w-full overflow-x-hidden">
        {/* <Header /> */}
        <div className="flex flex-col items-center flex-grow w-full pt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminScaffold;
