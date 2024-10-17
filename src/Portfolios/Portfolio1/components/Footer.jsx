const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between">
        <div className="border border-gray-700 rounded-2xl p-4 text-center sm:w-2/5">
          <p className="font-thin">©JohnDoe. 2024. All Rights Reserved.</p>
        </div>
        <div className="border border-gray-700 rounded-2xl p-4 flex justify-center items-center space-x-4 sm:w-3/5">
          {[6, 7, 8, 9, 10, 11, 12].map((num) => (
            <img
              key={num}
              src={`/api/placeholder/35/35`}
              alt={`Social Icon ${num}`}
              className="w-8 h-8 cursor-pointer hover:-translate-y-1 transition-transform"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
