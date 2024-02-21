import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Internship For Student
              <span className="hidden sm:block text-3xl py-2">
                Learn & Enhance Your Skill With Us
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="https://mtabtechnology.zohorecruit.com/jobs/Careers"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              View Openings
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>
      <div className="flex  place-items-left mb-20 bg-gray-50">
        <img
          className="sm:w-96 w-48 h-100 pb-4"
          src="https://www.abhyaz.com/Abhyaz%20website%20Design%20v10%20-18-.png"
          alt="image2"
        />
        <p className="place-items-right ml-20 mb-20">
        <h1 className="text-5xl mb-10 text-blue-200">“Abhyaz: Inspiring Growth, Shaping Careers, Enriching Communities.”</h1>
          At Abhyaz, we hire curious and talented individuals from all
          backgrounds. We offer both technical and non-technical career
          opportunities for students. We embrace diversity and value unique
          perspectives and experiences. Our goal is to provide a better learning
          experience for students so that they can make efficient use of their
          skills. If you perform well during your internship, you may have the
          opportunity to work with us after graduation. We offer remote
          internships in various fields that provide real-world experience.
        </p>
      </div>
    </div>
  );
}
