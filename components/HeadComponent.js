import Head from 'next/head';

function HeadComponent({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}

HeadComponent.defaultProps = {
  title: 'RaceInUtah',
  description:
    'RaceInUtah is a directory full of upcoming races happening in Utah.',
  keywords:
    'Utah, Upcoming Utah Races, Utah Events, Racing, Running, Biking, Mountain, Mountain Biking, Trail Runs, Trail Races, Virtual Runs, Virtual Races, Gravel Races, Gravel Biking, Wheelchair, Wheelchair Races, Duathlon, Duathlons, Triathlon, Triathlons, Bike Tours, Bike, Road Bikes, Road Bike Races, Marathons, Utah Marathons, Half Marathons, Utah Half Marathons',
};
export default HeadComponent;
