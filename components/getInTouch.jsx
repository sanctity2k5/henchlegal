"use client";
import { useState } from "react";
import PageContents from "./pageContents";
import emailjs from "@emailjs/browser";
// import Spinner from "react-bootstrap/Spinner";
// import "bootstrap/dist/css/bootstrap.min.css";

function GetInTouch() {
  const [spinner, loadSpinner] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, sendErrorMessage] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    loadSpinner(true); // Start the spinner animation

    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Message = document.getElementById("message").value;

    let formParams = {
      from_name: Name,
      from_email: Email,
      from_message: Message,
    };

    try {
      await emailjs.send(
        "service_qc24u9k",
        "template_yr4h11j",
        formParams,
        "RvWINbnR0zBAu8mcz"
      );
      // Set messageSent to true, and reset it to false after 2000 milliseconds (2 seconds)
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 4000);
    } catch (error) {
      // Set errorMessage to true, and reset it to false after 2000 milliseconds (2 seconds)
      sendErrorMessage(true);
      setTimeout(() => {
        sendErrorMessage(false);
      }, 4000);
    } finally {
      // Stop the spinner animation when done
      loadSpinner(false);
    }
  };

  return (
    <div>
      <section className="mt-28">
        <PageContents
          title="GET IN TOUCH"
          content="We are available Mon - Fri 7am - 5pm"
        />
      </section>
      <form
        onSubmit={sendEmail}
        className="flex flex-col px-4  md:mx-20 lg:mx-40"
      >
        <label htmlFor="name" className="xl:text-[24px] text-black">
          Name:<sup className="text-red-600 text-md">*</sup>
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 px-4 py-4 h-10 mb-2 rounded-lg hover:!border-2 hover:!border-red-700 focus:!border-2 xl:h-14 xl:w-[70%] text-gray-800 lg:text-[20px]"
          required
        />

        <label htmlFor="email" className="xl:text-[24px] text-black">
          Email:<sup className="text-red-600 text-md">*</sup>
        </label>
        <input
          type="text"
          id="email"
          className="border border-gray-300 px-4 py-4 h-10 mb-2 rounded-lg hover:!border-2 hover:!border-red-700 xl:h-14 xl:w-[70%] text-gray-800 lg:text-[20px]"
          required
        />
        <label htmlFor="message" className="xl:text-[24px] text-black">
          Message:<sup className="text-red-600 text-md">*</sup>
        </label>
        <textarea
          id="message" // You need to add an id for the textarea too
          className="border border-gray-300 px-3 py-2 h-32 mb-2 rounded-lg hover:!border-2 hover:!border-red-700 xl:w-[70%] text-gray-800 lg:text-[20px]"
          required
        ></textarea>
        {errorMessage && (
          <p className="bg-red-600 text-white px-4 py-2 rounded-lg md:px-20 xl:w-[70%] xl:text-[18px]">
            Message Not Sent... This might be due to some technical issues from
            our end, Pleae try again later
          </p>
        )}

        {messageSent && (
          <p className="bg-green-700 text-white px-4 py-2 rounded-lg md:px-20 xl:w-[70%] xl:text-[18px]">
            Your message has been sent. Thank you!
          </p>
        )}

        <button
          type="submit"
          className="bg-[#d03733] text-white w-32 h-12 p-2 rounded-lg md:w-32 md:text-[18px] lg:hover:bg-[#f38b8be5]"
          disabled={spinner} // Disable the button when spinner is true
        >
          {spinner ? (
            <span className="flex gap-2 justify-center items-center text-[14px]">
              Loading...
              <Spinner animation="border" role="status">
                <span className="visually-hidden w-4 h-4">Loading...</span>
              </Spinner>
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>

      <section className="px-4 mt-10 md:mx-20 lg:mx-40">
        <h1 className="text-[18px] font-semibold mb-4 text-black">
          SUITE F1 ROYAL PLAZA AJIRAN LEKKI
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3964.585966976669!2d3.5178536!3d6.4471696!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1695590721551!5m2!1sen!2sng"
          className="w-full h-60 rounded-xl border border-red-600 xl:h-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default GetInTouch;
