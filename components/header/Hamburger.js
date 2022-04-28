import Image from 'next/image';
import { useState } from 'react';

function Hamburger({ isMobileNavOpen, setIsMobileNavOpen }) {
  const [isHamburgerIcon, setIsHamburgerIcon] = useState(true);
  const hamburgerSrc = '/assets/hamburger.svg';
  const closeSrc = '/assets/close-icon.svg';
  const handleHamburgerClick = () => {
    setIsHamburgerIcon(!isHamburgerIcon);
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div
      onClick={handleHamburgerClick}
      className="relative z-[99999] flex h-[32px] w-[32px] cursor-pointer items-center justify-center py-6 md:hidden"
    >
      <Image
        src={isHamburgerIcon ? hamburgerSrc : closeSrc}
        height={isHamburgerIcon ? '32px' : '24px'}
        width={isHamburgerIcon ? '32px' : '24px'}
      />
    </div>
  );
}
export default Hamburger;
