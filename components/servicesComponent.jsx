"use client";
import React, { useState } from 'react';
import { servicesObject } from '@/constants';
import Image from 'next/image';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

function ServicesComponent({ content, onContentChange }) {

  return (
    <div>
      {servicesObject.map((service, index) => {
        return (
          <div className="px-4 mt-4 w-full md:px-20 text-black" key={index}>
            <button
              className="flex justify-between w-full lg:justify-start lg:gap-2 hover:gap-4"
              onClick={() => onContentChange(index)}
            >
              <h1 className="font-medium underline lg:text-[20px]">
                {service.title}
              </h1>
              <span>
                {content.includes(index) ? (
                  <AiFillCaretDown className="w-4 h-8" />
                ) : (
                  <AiFillCaretRight className="w-4 h-8" />
                )}
              </span>
            </button>
            <span id={`service-${index + 1}`}>
              {content.includes(index) && (
                <p className="lg:text-[18px] mt-1">{service.content}</p>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesComponent;
