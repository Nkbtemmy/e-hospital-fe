import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sideNavs } from '../../helpers/navs';
// import logo from 'assets/images/logo.svg';
// import minLogo from 'assets/images/minLogo.svg';
import { useWindow } from '../../../contexts/WindowContext';

const SideNav = () => {
  const { pathname } = useLocation();
  const { isLargeDevice } = useWindow();
  return (
    <div className="flex scrollbar flex-col min-h-screen max-h-screen top-0 sticky overflow-y-auto max-w-[16.666667%] bg-brand-black text-brand-gray w-full overflow-hidden bg-gray-800 text-white">
      {sideNavs.map((element, index) => {
        let active = pathname === element.to;
        if (element.to !== '/' && pathname.includes(element.to)) {
          active = true;
        }
        return (
          <Link
            key={element.label}
            to={element.to}
            className={`flex items-center relative gap-x-2 px-4 py-3 ${
              active
                ? 'bg-gray-scale text-accent-light'
                : 'hover:bg-gray-scale hover:text-white'
            }`}
          >
            {active ? (
              <span className="top-0 bottom-0 left-0 w-1 bg-accent-light absolute" />
            ) : null}
            <element.icon color={active ? '#DDE2FF' : '#9FA2B4'} />
            <span className="hidden md:block">{element.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
