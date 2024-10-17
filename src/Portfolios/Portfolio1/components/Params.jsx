const Params = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="space-y-4">
        {[
          "I enjoy",
          "creating new",
          "visions and",
          "trying different",
          "visual",
          "techniques.",
          "Therefore, you",
          "can find many",
          "experiments.",
        ].map((text, index) => (
          <h1
            key={index}
            className={`text-6xl sm:text-[135px] font-light tracking-tighter ${
              index % 2 === 0 ? "text-gray-400" : ""
            }`}
          >
            {text}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Params;
