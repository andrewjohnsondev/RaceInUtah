import { useState } from 'react';

import Logo from '../Logo';
import Nav from './Nav';
import Hamburger from './Hamburger';
import MobileNav from './mobile/MobileNav';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(null);

  return (
    <header className="relative border border-t-4 border-transparent border-t-blueGrey-900 bg-white py-6 md:py-2">
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
