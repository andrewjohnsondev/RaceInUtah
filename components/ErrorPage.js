import Button from '../components/Button';
import Link from 'next/link';

export default function ErrorPage({ type, message }) {
  return (
    <article className="bg-pattern grid min-h-[80vh] place-content-center gap-12 text-center">
      <h1 className="leading-0 text-7xl font-bold md:text-8xl">{type}</h1>
      <p className=" text-4xl md:text-5xl ">{message}</p>
      <div className="mt-2 flex flex-col gap-8 md:flex-row">
        <Link href="/">
          <a className='className="flex transition-colors" items-center justify-center gap-2 rounded bg-darkPrimary py-2 px-4 text-xl font-semibold tracking-wide text-white transition-colors hover:bg-darkPrimary/70'>
            Go to home
          </a>
        </Link>
        <Button
          onClick={() => router.back()}
          className="border border-darkPrimary text-xl text-darkPrimary transition-colors hover:bg-darkPrimary hover:text-white "
        >
          Previous page
        </Button>
      </div>
    </article>
  );
}
