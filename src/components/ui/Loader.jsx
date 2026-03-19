export const Loader = () => (
  <div className="flex flex-col justify-center items-center h-screen gap-4">
    <div className="text-center text-black">
      Page Loading <br />
      Please wait as this may take few seconds...
    </div>
    <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);
