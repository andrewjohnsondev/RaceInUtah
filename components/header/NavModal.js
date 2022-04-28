import { useRef } from 'react';
import Link from 'next/link';
import useNavigationModal from '../../hooks/useNavigationModal';
import NavModalLinkList from './NavModalLinkList';
import { runningLinks, bikingLinks } from './options';

function NavModal({ isSecondaryNavOpen }) {
  const modalRef = useRef();

  const { init, open, close } = useNavigationModal(
    isSecondaryNavOpen,
    modalRef
  );

  return (
    <ul
      ref={modalRef}
      className={`absolute ${init} ${open} ${close} left-0 top-[104%] z-[99999] grid w-[400px] grid-cols-[min-content,_min-content] justify-center gap-6 gap-x-16 rounded bg-white p-8 text-blueGrey-900  shadow-lg transition-all`}
    >
      <li>
        <Link href="/events/running/all">
          <a className="text-lg font-bold transition-colors hover:text-blueGrey-900/70">
            Running
          </a>
        </Link>
        <NavModalLinkList links={runningLinks} />
      </li>

      <li>
        <Link href="/events/biking/all">
          <a className="text-lg font-bold transition-colors hover:text-blueGrey-900/70">
            Biking
          </a>
        </Link>
        <NavModalLinkList links={bikingLinks} />
      </li>
      <li>
        <Link href="/events/triathlon">
          <a className="text-lg font-bold transition-colors hover:text-blueGrey-900/70">
            Triathlon
          </a>
        </Link>
      </li>
      <li>
        <Link href="/events/duathlon">
          <a className="text-lg font-bold transition-colors hover:text-blueGrey-900/70">
            Duathlon
          </a>
        </Link>
      </li>
      <li>
        <Link href="/events/wheelchair">
          <a className="text-lg font-bold transition-colors hover:text-blueGrey-900/70">
            Wheelchair
          </a>
        </Link>
      </li>
    </ul>
  );
}
export default NavModal;
