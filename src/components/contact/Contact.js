import React, { useState } from "react";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full h-[800px] text-black">
      <div className="w-full  flex flex-col py-10 gap-8 p-4  rounded-lg">
        <form>
          {errMsg && (
            <p className="py-3  text-center text-orange-500 text-base tracking-wide animate-bounce">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="py-3  text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-designColor focus:border-designColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-designColor dark:focus:border-designColor hover:border-[1px] hover:border-designColor"
                required
              />
            </div>
            <div>
              <label
                for="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-[1px] hover:border-designColor"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-[1px] hover:border-designColor"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-[1px] hover:border-designColor"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cols-30 row-8 hover:border-designColor border-transparent"
              rows={8}
              required
            />
          </div>
          <div className="group cursor-pointer">
            <button
              onClick={handleSend}
              className="w-full flex justify-center items-center gap-2 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide  hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
            >
              Send Message{" "}
              <span>
                <TbSend />
              </span>
            </button>
          </div>
          {errMsg && (
            <p className="py-3  text-center text-orange-500 text-base tracking-wide animate-bounce">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="py-3  text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
