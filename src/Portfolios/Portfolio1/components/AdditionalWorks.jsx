const AdditionalWorks = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {[6, 7, 8].map((num) => (
          <div key={num} className="flex-1">
            <img
              src={`/api/placeholder/400/300`}
              alt={`Work ${num}`}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalWorks;
