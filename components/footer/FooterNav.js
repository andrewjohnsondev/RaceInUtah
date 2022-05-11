import Link from 'next/link';

function FooterNav() {
  return (
    <div className="h-full w-full rounded bg-blueGrey-800 py-12 px-12 md:w-auto md:px-6 lg:rounded-none lg:px-20">
      <h2 className="text-xl font-bold text-white sm:text-2xl">Explore</h2>
      <hr className="my-6 border-2 border-blueGrey-700/30" />
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <li>
          <Link href="/events/running/all">
            <a className="text-blueGrey-300">Running</a>
          </Link>
        </li>
        <li>
          <Link href="/events/biking/all">
            <a className="text-blueGrey-300">Biking</a>
          </Link>
        </li>
        <li>
          <Link href="/events/triathlon">
            <a className="text-blueGrey-300">Triathlon</a>
          </Link>
        </li>
        <li>
          <Link href="/events/duathlon">
            <a className="text-blueGrey-300">Duathlon</a>
          </Link>
        </li>
        <li>
          <Link href="/events/wheelchair">
            <a className="text-blueGrey-300">Wheelchair</a>
          </Link>
        </li>
        <li>
          <Link href="/calendar">
            <a className="text-blueGrey-300">Calendar</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default FooterNav;
