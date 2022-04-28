function Loader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-blueGrey-900">
      <p className="text-2xl text-white">Loading...</p>
      <img className="animate-spin" src="/assets/compass.svg" alt="" />
    </div>
  );
}
export default Loader;
