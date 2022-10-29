import { useRouter } from 'next/router';
import { useEffect } from 'react';

function useRouterListen(handleRouteChange) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, handleRouteChange]);
}
export default useRouterListen;
