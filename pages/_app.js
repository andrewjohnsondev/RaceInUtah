import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '../styles/globals.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import IsSearchingProvider from '../components/providers/IsSearchingProvider';
import RaceListProvider from '../components/providers/RaceListProvider';
import RaceEventsProvider from '../components/providers/RaceEventsProvider';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <RaceListProvider>
        <RaceEventsProvider>
          <IsSearchingProvider>
            <Component {...pageProps} />
          </IsSearchingProvider>
        </RaceEventsProvider>
      </RaceListProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
