import Image from 'next/image';

import EventCardList from '../components/events/EventCardList';

function Home() {
  return (
    <>
      <main className="md:py-22 relative z-50 py-24">
        <div className="wrapper relative z-50 space-y-20 md:space-y-24">
          <header className="space-y-5 md:space-y-9">
            <h1 className="mx-auto text-[2.5rem] font-bold sm:text-5xl md:text-6xl">
              <span>
                <img className="opacity-10" src="./assets/accent.svg" alt="" />
              </span>
              Upcoming Utah Races
            </h1>
            <p className="font-base max-w-2xl text-blueGrey-600 sm:text-2xl md:leading-10">
              RaceInUtah is a directory full of upcoming races happening in
              Utah. Pick an <span className="font-bold">event</span> to find
              your next race!
            </p>
          </header>
          <section>
            <EventCardList />
          </section>
        </div>

        <div className="background-image"></div>
      </main>
    </>
  );
}
export default Home;
