function SectionTitle({ title, className }) {
  return (
    <h1
      className={`max-w-2xl text-4xl font-bold text-blueGrey-900  md:text-5xl ${className}`}
    >
      {title}
    </h1>
  );
}
export default SectionTitle;
