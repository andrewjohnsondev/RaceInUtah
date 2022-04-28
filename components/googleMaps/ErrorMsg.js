function ErrorMsg() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-red-100">
      <p className="text-3xl text-red-800">Failed to load map...</p>
      <img src="/assets/frown.svg" alt="" />
    </div>
  );
}
export default ErrorMsg;
