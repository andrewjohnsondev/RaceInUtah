import '../styles/globals.css';
import '../styles/calendar.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import IsSearchingProvider from '../components/providers/IsSearchingProvider';
import RaceListProvider from '../components/providers/RaceListProvider';
import RaceEventsProvider from '../components/providers/RaceEventsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <RaceListProvider>
        <RaceEventsProvider>
          <IsSearchingProvider>
            <Component {...pageProps} />
          </IsSearchingProvider>
        </RaceEventsProvider>
      </RaceListProvider>
      <Footer />
    </>
  );
}

export default MyApp;
