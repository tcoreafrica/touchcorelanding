const Preloader = () => {
  return (
    <div
      className="fixed inset-0 bg-bgPrimary flex items-center justify-center z-50 select-none"
      draggable={false}
    >
      <img
        src="/logo.svg"
        alt="Loading..."
        className="animate-spin-slow pointer-events-none size-36"
        draggable={false}
      />
    </div>
  );
};

export default Preloader;
