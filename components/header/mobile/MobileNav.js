import { useRef } from 'react';
import NavModalLinkList from '../NavModalLinkList';
import useNavigationModal from '../../../hooks/useNavigationModal';
import Link from 'next/link';
import { runningLinks, bikingLinks } from '../options';

function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const mobileNavRef = useRef();
  const { init, open, close } = useNavigationModal(
    isMobileNavOpen,
    mobileNavRef
  );
  return (
    <div
      ref={mobileNavRef}
      className={`${init} ${open} ${close} absolute top-4 right-3 z-[9999] min-h-[65vh] w-[95%] rounded bg-white shadow-xl transition-all duration-1000 md:hidden`}
    >
      <h2 className="mx-auto max-w-md border border-b-2 border-transparent border-b-blueGrey-900/10 px-10 py-8 text-left hover:text-blueGrey-700">
        <Link href="/">
          <a className="text-xl font-bold">Events</a>
        </Link>
      </h2>
      <div className="mx-auto max-w-md">
        <div className=" grid grid-cols-[min-content_min-content] justify-between gap-6  bg-white px-10 py-8 text-left text-lg font-semibold text-blueGrey-700">
          <div className="space-y-4">
            <h3 className="hover:text-blueGrey-600">
              <Link href="/events/running/all">Running</Link>
            </h3>
            <NavModalLinkList
              classList="font-normal text-blueGrey-600 hover:text-blueGrey-600/70"
              links={runningLinks}
            />
          </div>

          <div className="space-y-4">
            <h3 className="hover:text-blueGrey-600">
              <Link href="/events/biking/all">Biking</Link>
            </h3>
            <NavModalLinkList
              classList="font-normal text-blueGrey-600 hover:text-blueGrey-600/70"
              links={bikingLinks}
            />
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
      <div className=" bg-blueGrey-100">
        <div className="mx-auto flex max-w-md justify-between px-10 py-8 text-xl font-bold">
          <h2>Calendar</h2>
          <h2>Create Race</h2>
        </div>
      </div>
    </div>
  );
}
export default MobileNav;
