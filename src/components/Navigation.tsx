import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Book search</h3>
      <span className="flex justify-between w-[120px] px-0">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  );
};

export default Navigation;