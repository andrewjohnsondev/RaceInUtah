import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

import NavModal from './NavModal';

function NavLink({ text, href }) {
  const [isSecondaryNavOpen, setIsSecondaryNavOpen] = useState(null);
  const { pathname } = useRouter();
  const linkRef = useRef();

  useEffect(() => {
    () => {
      setIsSecondaryNavOpen(false);
    };
  }, [pathname]);

  useEffect(() => {
    const handleModal = (e) => {
      if (linkRef.current) {
        if (
          linkRef.current.contains(e.target) ||
          e.target === linkRef.current
        ) {
          return setIsSecondaryNavOpen(true);
        }

        if (isSecondaryNavOpen && !linkRef.current.contains(e.target)) {
          setIsSecondaryNavOpen(false);
        }
      }
    };
    document.addEventListener('mouseover', handleModal);

    () => {
      document.removeEventListener(handleModal);
    };
  }, [isSecondaryNavOpen]);

  const renderModal = () => {
    if (text === 'Events') {
      return (
        <NavModal
          setIsSecondaryNavOpen={setIsSecondaryNavOpen}
          isSecondaryNavOpen={isSecondaryNavOpen}
        />
      );
    }
    return null;
  };
  return (
    <li ref={linkRef}>
      <Link href={href}>
        <a
          className={`${
            pathname === href && 'active'
          }  relative h-full cursor-pointer border-b-4 border-transparent py-8 px-4 text-lg transition-all hover:text-primary  md:block`}
        >
          {text}
        </a>
      </Link>
      {renderModal()}
    </li>
  );
}
export default NavLink;
