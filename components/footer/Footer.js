import Logo from '../Logo';
import FooterNav from './FooterNav';
import Button from '../Button';

function Footer() {
  return (
    <footer className="relative z-50 mt-auto bg-blueGrey-900 py-16 md:py-0">
      <div className="wrapper flex flex-col items-center justify-between gap-16 md:flex-row md:gap-4">
        <Logo isLight="true" />
        <FooterNav />
        <a
          className="border-3 rounded border border-white py-2 px-4 text-base font-semibold tracking-wide text-white transition-colors transition-colors hover:bg-white hover:text-blueGrey-900"
          href="https://runsignup.com/Race/New"
          target="_blank"
        >
          Create Race
        </a>
      </div>
    </footer>
  );
}
export default Footer;
