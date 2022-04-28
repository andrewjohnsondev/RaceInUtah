import { useState } from 'react';
import NavLink from './NavLink';

function Nav() {
  return (
    <nav className="hidden md:block">
      <ul
        className="flex items-stretch gap-12 font-medium"
        aria-label="primary"
      >
        <NavLink text="Events" href="/" />
        <NavLink text="Calendar" href="/calendar" />

        <li className="h-full cursor-pointer border-b-4 border-transparent px-4 py-8 text-lg transition-colors  hover:text-primary">
          <a href="https://runsignup.com/Race/New" target="_blank">
            Create Race
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
