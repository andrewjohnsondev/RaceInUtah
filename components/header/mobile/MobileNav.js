import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavModalLinkList from '../NavModalLinkList';
import useNavigationModal from '../../../hooks/useNavigationModal';
import Link from 'next/link';
import { runningLinks, bikingLinks } from '../options';

function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const { pathname } = useRouter();
  const renderActiveLink = (href) => {
    return href === pathname
      ? 'text-primary'
      : 'text-blueGrey-700 hover:text-blueGrey-700/70';
  };

  const mobileNavRef = useRef();
  const { init, open, close } = useNavigationModal(
    isMobileNavOpen,
    mobileNavRef
  );

  return (
    <div
      ref={mobileNavRef}
      className={`${init} ${open} ${close} absolute top-4 right-3 z-[9999] flex min-h-[65vh] w-[95%] flex-col  items-stretch justify-between rounded bg-white shadow-xl shadow-blueGrey-400/50 transition-all duration-1000 md:hidden`}
    >
      <h2 className="max-full mx-auto border border-b-2 border-transparent border-b-blueGrey-900/10 px-10 py-8 text-left hover:text-blueGrey-700">
        <Link href="/">
          <a className="text-xl font-bold">Events</a>
        </Link>
      </h2>
      <div className="mx-auto w-full">
        <div className=" grid grid-cols-[min-content_min-content] justify-between gap-6  bg-white px-10 py-8 text-left text-lg font-semibold text-blueGrey-700">
          <div className="space-y-4">
            <h3 className="hover:text-blueGrey-600">
              <Link href="/events/running/all">Running</Link>
            </h3>
            <NavModalLinkList links={runningLinks} />
          </div>

          <div className="space-y-4">
            <h3 className="hover:text-blueGrey-600">
              <Link href="/events/biking/all">Biking</Link>
            </h3>
            <NavModalLinkList links={bikingLinks} />
          </div>
          <h3 className="hover:text-blueGrey-600">
            <Link href="/events/triathlon">Triathlon</Link>
          </h3>
          <h3 className="hover:text-blueGrey-600">
            <Link href="/events/duathlon">Duathlon</Link>
          </h3>
          <h3 className="hover:text-blueGrey-600">
            <Link href="/events/wheelchair">Wheelchair</Link>
          </h3>
        </div>
      </div>
      <div className=" mt-auto bg-blueGrey-100">
        <div className="mx-auto flex max-w-md justify-between px-10 py-8 text-xl font-bold">
          <Link href="/calendar">Calendar</Link>
          <h2>
            <a href="https://runsignup.com/Race/New" target="_blank">
              Create Race
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default MobileNav;
