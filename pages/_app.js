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
import Head from 'next/head';
import Toast from '../components/Toast';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
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
      <Toast message="something bad happened" />
      <Footer />
    </>
  );
}

export default MyApp;
