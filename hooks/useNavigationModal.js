import { useEffect } from 'react';

function useNavigationModal(isOpen, ref) {
  const init = isOpen === null && 'hidden';
  const open = isOpen === false && 'fade-out';
  const close = isOpen === true && 'fade-in';

  useEffect(() => {
    if (isOpen === false) {
      ref.current.addEventListener(
        'animationend',
        () => {
          ref.current.classList.add('hidden');
        },
        { once: true }
      );
    }
  }, [isOpen]);

  return {
    init,
    open,
    close,
  };
}
export default useNavigationModal;
