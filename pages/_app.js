import Router from 'next/router';
import '../styles/globals.css';
import '../styles/calendar.css';
import '../styles/nprogress.css';
import NProgress from 'nprogress';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import IsSearchingProvider from '../components/providers/IsSearchingProvider';
import RaceListProvider from '../components/providers/RaceListProvider';
import RaceEventsProvider from '../components/providers/RaceEventsProvider';
import ErrorBoundary from '../components/ErrorBoundary';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <RaceListProvider>
        <RaceEventsProvider>
          <IsSearchingProvider>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </IsSearchingProvider>
        </RaceEventsProvider>
      </RaceListProvider>
      <Footer />
    </>
  );
}

export default MyApp;
