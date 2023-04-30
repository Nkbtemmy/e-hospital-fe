import React from 'react';
import { useLocation } from 'react-router-dom';
import { sideNavs } from '../../helpers/navs';
import SearchIcon from '../_drawable/icons/searchIcon';
import NotificationIcon from '../_drawable/icons/notificationIcon';
import isAuth from '../../helpers/isAuth';
import { Avatar } from '@mui/material';

const Header = () => {
  const user = isAuth();
  // console.log(user);
  const { pathname } = useLocation();
  const getLabel = () => {
    switch (pathname) {
      case sideNavs[0].to:
        return sideNavs[0].label;
      case sideNavs[1].to:
        return sideNavs[1].label;
      case '/add-curriculum':
        return 'Add curriculum';
      case '/levels':
        return 'Levels';
      case '/add-level':
        return 'Add Level';
      case '/grades':
        return 'Grades';
      case '/add-grade':
        return 'Add Grade';
      case '/safeguarding-tips':
        return 'Safe guarding tips';
      case '/tutors':
        return 'Tutors';
      case '/add-tutor':
        return 'Add Tutor';
      case '/curricula':
        return 'Curriculums';
      case '/courses':
        return 'Courses';
      case '/avatars':
        return 'Avatars';
      case '/animations':
        return 'Animations';
      case '/audios':
        return 'Audios';
      case '/augmented-world':
        return 'Augmented Worlds';
      case '/library':
        return 'Books';
      case '/comics':
        return 'Comics';
      case '/board-game':
        return 'Board Games';
      case '/papers':
        return 'Past Papers';
      case '/competitions':
        return 'Competitions';
      case '/analytics':
        return 'Analytics';
      case '/users':
        return 'Users';
      case '/shop':
        return 'Products';  
      default:
        return '';
    }
  };
  return (
    <div className="top-0 sticky bg-accent-light drop-shadow font-medium flex items-center justify-between px-4 py-[3.5px] w-full">
      <h2>{getLabel()}</h2>
      <div className="flex items-center gap-x-6">
        <button type="button">
          <SearchIcon />
        </button>
        <button type="button">
          <NotificationIcon />
        </button>
        <div className="h-full w-0 5 bg-gray-scale" />
        <div className="flex items-center gap-x-2 cursor-pointer">
          <p className="font-medium">
            {user ? user.firstName : null}
          </p>
          {user ? (
            <Avatar src={user.avatar} alt={user.fristName} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
