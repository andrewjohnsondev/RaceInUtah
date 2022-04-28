import Link from 'next/link';

function NavModalLinkList({ links, classList }) {
  const renderLinks = () => {
    return links.map(({ text, href }) => {
      return (
        <li key={text}>
          <Link href={href}>
            <a
              className={
                classList
                  ? classList
                  : 'text-base text-blueGrey-700 transition-colors hover:text-blueGrey-700/70'
              }
            >
              {text}
            </a>
          </Link>
        </li>
      );
    });
  };
  return <ul className="space-y-2">{renderLinks()}</ul>;
}
export default NavModalLinkList;
