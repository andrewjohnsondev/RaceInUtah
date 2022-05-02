import Link from 'next/link';
import { useRouter } from 'next/router';

function NavModalLinkList({ links, classList }) {
  const { pathname } = useRouter();
  const renderActiveLink = (href) => {
    return href === pathname
      ? 'text-darkPrimary'
      : 'text-blueGrey-700 hover:text-blueGrey-700/70';
  };
  const renderLinks = () => {
    return links.map(({ text, href }) => {
      return (
        <li key={text}>
          <Link href={href}>
            <a
              className={
                classList
                  ? classList
                  : `text-base ${renderActiveLink(href)} transition-colors `
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
