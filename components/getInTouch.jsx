import PageContents from "./pageContents";

function GetInTouch() {
  return (
    <div>
      <section className="mt-28">
        <PageContents
          title="GET IN TOUCH"
          content="We are available Mon - Fri 7am - 5pm"
        />
      </section>
      <form className="flex flex-col px-4 md:px-20 lg:px-40">
        <span className="flex flex-col mt-6">
          <label htmlFor="name" className="xl:text-[24px] text-black">
            Name:<sup className="text-red-600 text-md">*</sup>
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 h-10 mb-2 rounded-lg xl:h-14 xl:w-[70%] text-gray-800 lg:text-[24px]"
            required
          />
        </span>

        <span className="flex flex-col">
          <label htmlFor="email" className="xl:text-[24px] text-black">
            Email:<sup className="text-red-600 text-md">*</sup>
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 h-10 mb-2 rounded-lg xl:h-14 xl:w-[70%] text-gray-800 lg:text-[24px]"
            required
          />
        </span>
        <span className="flex flex-col">
          <label htmlFor="message" className="xl:text-[24px] text-black">
            Message:<sup className="text-red-600 text-md">*</sup>
          </label>
          <textarea
            id="message" // You need to add an id for the textarea too
            className="border border-gray-300 h-32 mb-2 rounded-lg xl:w-[70%] text-gray-800 lg:text-[24px]"
            required
          ></textarea>
        </span>

        <button
          type="submit"
          className="bg-[#d03733] text-white w-20 p-2 rounded-lg mt-2 md:w-32 md:text-[24px]"
        >
          Send
        </button>
      </form>

      <section className="px-4 mt-10 md:px-20 lg:px-40">
        <h1 className="text-[18px] font-semibold mb-4 text-black">SUITE F1 ROYAL PLAZA AJIRAN LEKKI</h1>
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
