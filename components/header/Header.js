import { useState, createPortal } from 'react';

import Logo from '../Logo';
import Nav from './Nav';
import Hamburger from './Hamburger';
import MobileNav from './mobile/MobileNav';
import useRouterListen from '../../hooks/useRouteListen';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(null);
  useRouterListen(() => setIsMobileNavOpen(false));

  return (
    <header className="sticky top-0 z-[999999] bg-white py-6 shadow-lg shadow-blueGrey-400/10 md:py-0">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <Hamburger
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
        <Nav />
      </div>
    </header>
  );
}
export default Header;
