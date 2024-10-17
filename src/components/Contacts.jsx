const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="border border-gray-700 rounded-3xl p-8 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
          <h2 className="text-2xl sm:text-4xl font-thin text-gray-400 leading-tight tracking-tighter mb-4">
            If you have a general or project enquiry, please drop me an email or
            fill the form.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-thin">*hello@gmail.com</h3>
        </div>
        <div className="w-full sm:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full p-4 text-2xl bg-black border border-gray-700 rounded-2xl focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-4 text-2xl bg-black border border-gray-700 rounded-2xl focus:outline-none"
          />
          <textarea
            rows="7"
            placeholder="Message*"
            className="w-full p-4 text-2xl bg-black border border-gray-700 rounded-2xl focus:outline-none resize-none"
          ></textarea>
          <button className="w-full p-4 text-2xl bg-black border border-gray-700 rounded-2xl text-gray-400 hover:text-white transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
