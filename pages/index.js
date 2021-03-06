import EventCardsList from '../components/events/EventCardsList';
import HeadComponent from '../components/HeadComponent';

function Home() {
  return (
    <>
      <HeadComponent />
      <main className="relative z-50 py-20 md:py-24">
        <div className="wrapper relative z-50 space-y-20 md:space-y-24 ">
          <header className="space-y-5 md:space-y-6">
            <h1 className="relative mx-auto text-5xl font-bold sm:text-5xl md:text-6xl">
              <span className="absolute left-0 top-[-25px]">
                <img className="opacity-10" src="./assets/accent.svg" alt="" />
              </span>
              Upcoming Utah Races
            </h1>
            <p className="font-base max-w-2xl text-blueGrey-600 sm:text-xl md:leading-10">
              RaceInUtah is a directory full of upcoming races happening in
              Utah. Pick an <span className="font-bold">event</span> to find
              your next race!
            </p>
          </header>
          <section>
            <EventCardsList />
          </section>
        </div>

        <div className="background-image"></div>
      </main>
    </>
  );
}
export default Home;
