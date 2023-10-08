import React from 'react';
import Link from 'next/link';
import { servicesObject } from '@/constants';
import Image from 'next/image';
import { AiOutlineArrowRight } from "react-icons/ai";

function ServicesCard({ href, onContentChange }) {
  const maxLength = 100; // Adjust this value as needed

  function sliceByWords(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    const words = text.split(" ");
    let result = "";
    let currentLength = 0;

    for (const word of words) {
      if (currentLength + word.length + 1 <= maxLength) {
        result += `${word} `;
        currentLength += word.length + 1;
      } else {
        break;
      }
    }

    return `${result.trim()}`;
  }

  // Function to handle "Read More" button click
  const handleReadMore = (index) => {
    // Toggle the service's index in the content state in the parent component
    onContentChange(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:mx-40 text-black px-4 mt-6">
      {servicesObject &&
        servicesObject.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-lg bg-white hover:!bg-gray-100"
          >
            <Image
              src={service.image} // Replace with the actual image URL
              alt={`Service ${index + 1} Image`}
              className="mb-4 w-full h-48 rounded-t-lg border"
            />
            <h1 className="text-[16px] w-full font-p-posts text-[#9a2002] font-semibold md:text-[16px] lg:text-[18px] xl:text-[16px] px-4">
              {service.title}
            </h1>
            <p className="text-[16px] font-p-posts text-black mt-2 lg:text-[20px] px-4">
              {sliceByWords(service.content, maxLength)}
            </p>
            <Link href={`${href}-${index + 1}`}  onClick={() => handleReadMore(index)} // Pass the index to handleReadMore
                className="flex items-center gap-1 mt-2 font-bold px-4 mb-4 hover:gap-2 hover:text-[#9a2002] hover:duration-[350ms]">
                Read More <AiOutlineArrowRight className="w-6 font-bold" />
            </Link>
          </div>
        ))}
    </div>
  );
}

export default ServicesCard;
