function RaceMeta({ title, meta, icon }) {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center justify-center gap-3 text-2xl font-semibold text-white md:justify-start">
        <span>
          <img src={icon} alt="" />
        </span>
        {title}
      </h2>
      <p className="max-w-xs text-base text-white/80 md:text-lg">{meta}</p>
    </div>
  );
}
export default RaceMeta;
