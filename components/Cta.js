function Cta({ text }) {
  return (
    <div className="flex justify-center bg-darkPrimary py-12">
      <a
        className="inline-block rounded bg-white py-3 px-8 text-2xl font-bold text-darkPrimary shadow-lg shadow-[#1992D4]/50 transition-colors hover:bg-primary hover:text-white"
        href="#"
      >
        {text}
      </a>
    </div>
  );
}
export default Cta;
