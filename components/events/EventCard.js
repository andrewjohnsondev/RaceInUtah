import Image from 'next/image';
import Link from 'next/link';

function EventCard({ type, href, imageLink }) {
  return (
    <Link href={href} passHref>
      <a className="flex flex-col items-center justify-center gap-6 rounded bg-white p-6 shadow-md shadow-blueGrey-300/50 transition-colors hover:bg-primary hover:text-white">
        <Image src={imageLink} height="90px" width="90px" />
        <h2 className="med:text-[2rem] text-2xl font-medium">{type}</h2>
      </a>
    </Link>
  );
}
export default EventCard;
