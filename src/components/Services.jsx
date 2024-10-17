const Services = () => {
  return (
    <>
      <div className="text-center py-24">
        <p>(MAIN SERVICES)</p>
      </div>

      {/* SERVICE DETAILS */}
      <div className="container mx-auto px-4 space-y-10">
        {[
          ["*WEB DESIGN", "MOBILE APPS*"],
          ["*WEB DEVELOPMENT", "BRANDING*"],
          ["*WEBFLOW DEV", "*WORDPRESS DEV*"],
        ].map((pair, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-gray-700 rounded-3xl p-8"
          >
            <h1
              className={`text-4xl sm:text-7xl font-thin ${
                index % 2 === 0 ? "" : "text-gray-400"
              }`}
            >
              {pair[0]}
            </h1>
            <h1
              className={`text-4xl sm:text-7xl font-thin ${
                index % 2 === 0 ? "text-gray-400" : ""
              }`}
            >
              {pair[1]}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
