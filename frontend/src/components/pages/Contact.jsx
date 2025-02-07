import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import MetaData from "../MetaData";

const CirclePattern = () => (
  <svg className="absolute w-full h-full" viewBox="0 0 400 400">
    <circle
      cx="200"
      cy="200"
      r="150"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
      strokeDasharray="5 5"
    />
    <circle
      cx="200"
      cy="200"
      r="100"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
    />
    <circle
      cx="350"
      cy="350"
      r="40"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
    />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <MetaData title={` Contact us`} />
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 relative">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-8 rounded-2xl relative overflow-hidden"
        >
          <CirclePattern />
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mr-2" // Adjusted size for alignment
                >
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z"
                    fill="white"
                  />
                </svg>
                BookLand
              </h1>

              <div className="w-12 h-1 bg-white"></div>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              We'd love to
              <br />
              hear from you
              <span className="text-yellow-400">.</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Have questions about our collection? Want to organize a book
              reading? Or just want to say hello? We're here for you.
            </p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-100 rounded-full -ml-16 -mb-16 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black transition-colors bg-transparent outline-none peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:text-xs peer-focus:-top-5 peer-focus:left-2 peer-focus:text-black peer-valid:text-xs peer-valid:-top-3 peer-valid:left-2">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border-2 border-gray-200 rounded-lg focus:border-black transition-colors bg-transparent outline-none peer"
                  placeholder=" "
                />
                <label className="absolute mt-2 left-4 top-4 text-gray-500 transition-all peer-focus:text-xs peer-focus:-top-5 peer-focus:left-2 peer-focus:text-black peer-valid:text-xs peer-valid:-top-3 peer-valid:left-2">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full mt-4 p-4 border-2 border-gray-200 rounded-lg focus:border-black transition-colors bg-transparent outline-none resize-none peer"
                  placeholder=" "
                />
                <label className="absolute left-4 mt-4 top-4 text-gray-500 transition-all peer-focus:text-xs peer-focus:-top-5 peer-focus:left-2 peer-focus:text-black peer-valid:text-xs peer-valid:-top-3 peer-valid:left-2">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white font-medium py-4 rounded-lg transition-all duration-300 hover:bg-gray-900 text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
