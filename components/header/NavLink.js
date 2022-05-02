import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

import NavModal from './NavModal';

function NavLink({ text, href }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(null);
  const { pathname } = useRouter();
  const linkRef = useRef();
  const timeout = useRef();

  useEffect(() => {
    () => {
      setIsSubMenuOpen(false);
    };
  }, [pathname]);

  const renderModal = () => {
    if (text === 'Events') {
      return (
        <NavModal
          setIsSubMenuOpen={setIsSubMenuOpen}
          isSubMenuOpen={isSubMenuOpen}
        />
      );
    }
    return null;
  };

  const handleMouseEnter = () => {
    if (text !== 'Events') return;
    timeout.current = setTimeout(() => {
      setIsSubMenuOpen(true);
    }, 100);
  };
  const handleMouseLeave = () => {
    if (text !== 'Events') return;
    clearTimeout(timeout.current);
    setIsSubMenuOpen(false);
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
      ref={linkRef}
    >
      <Link href={href}>
        <a
          className={`${
            pathname === href && 'active'
          }  h-full cursor-pointer border-b-4 border-transparent py-8 px-4 text-lg transition-all hover:text-primary  md:block`}
        >
          {text}
        </a>
      </Link>
      {renderModal()}
    </li>
  );
}
export default NavLink;
