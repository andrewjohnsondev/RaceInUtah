function RaceDescription({ data, race_logo }) {
  return (
    <>
      <h2 className="text-3xl font-bold">Description</h2>
      <div
        className="description mx-auto space-y-6"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <img className="mx-auto" src={race_logo} alt="" />
    </>
  );
}
export default RaceDescription;
