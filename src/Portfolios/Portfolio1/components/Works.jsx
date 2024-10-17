const Works = () => {
  return (
    <>
      <div className="text-center py-12">
        <p className="text-sm text-gray-400">(SELECTED WORKS 2022-2023)</p>
      </div>

      {/* WORK SHOWCASE */}
      <div className="container mx-auto px-4 space-y-16">
        <div className="border border-gray-700 rounded-3xl p-4">
          <img
            src="/api/placeholder/800/600"
            alt="Work 1"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="border border-gray-700 rounded-3xl p-4 flex-1">
            <img
              src="/api/placeholder/400/300"
              alt="Work 2"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="border border-gray-700 rounded-3xl p-4 flex-1">
            <img
              src="/api/placeholder/400/300"
              alt="Work 3"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="border border-gray-700 rounded-3xl p-4 flex-1">
            <img
              src="/api/placeholder/400/300"
              alt="Work 4"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="border border-gray-700 rounded-3xl p-4 flex-1">
            <img
              src="/api/placeholder/400/300"
              alt="Work 5"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
        <div className="border border-gray-700 rounded-3xl p-4">
          <video
            src="https://sharminbintes.com/wp-content/uploads/2024/01/4.webm?_=1"
            muted
            autoPlay
            loop
            className="w-full h-auto rounded-2xl"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Works;
