function Section({ children, className }) {
  return (
    <section className={`${className} py-20 md:py-24`}>{children}</section>
  );
}
export default Section;
