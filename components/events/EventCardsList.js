import EventCard from './EventCard';

const options = [
  {
    type: 'Running',
    href: '/events/running/all',
    imageLink: '/assets/running.svg',
  },
  {
    type: 'Biking',
    href: '/events/biking/all',
    imageLink: '/assets/biking.svg',
  },
  {
    type: 'Triathlon',
    href: '/events/triathlon',
    imageLink: '/assets/triathlon.svg',
  },
  {
    type: 'Duathlon',
    href: '/events/duathlon',
    imageLink: '/assets/duathlon.svg',
  },
  {
    type: 'Wheelchair',
    href: '/events/wheelchair',
    imageLink: '/assets/wheelchair.svg',
  },
];

function EventCardsList() {
  const renderList = () =>
    options.map(({ type, href, imageLink }) => {
      return (
        <li key={type}>
          <EventCard type={type} href={href} imageLink={imageLink} />
        </li>
      );
    });

  return (
    <ul className="relative z-50 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderList()}
    </ul>
  );
}
export default EventCardsList;
