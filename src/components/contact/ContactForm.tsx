"use client";

const ContactForm = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded flex items-center justify-center transition duration-300"
        >
          <span>Send Message</span>
        </button>
      </div>
    </>
  );
};

export default ContactForm;
