import React from "react";

const stats = [
  { id: 1, name: "Applicants", value: "110k+" },
  { id: 2, name: "Remote Interns", value: "1500+" },
  { id: 3, name: "Job Roles", value: "50+" },
  { id: 4, name: "Certified", value: "410+" },
];

export default function Job() {
  return (
    <>
      <h1 className="text-center text-2xl sm:text-3xl py-10 font-medium">
        Opportunity for Students
      </h1>
      <div className="flex  place-items-left sm:mt-20 mb-20">
        <img
          className="sm:w-96 w-48 h-100 pb-4"
          src="https://careercartz.com/wp-content/uploads/2022/11/Work-From-Home-Jobs-Without-Investment-The-Complete-Updated-List.jpg"
          alt="image2"
        />
        <h1 className="place-items-right ml-20 mb-20 mt-20">
          At Abhyaz, we hire curious and talented individuals from all
          backgrounds. We offer both technical and non-technical career
          opportunities for students. We embrace diversity and value unique
          perspectives and experiences. Our goal is to provide a better learning
          experience for students so that they can make efficient use of their
          skills. If you perform well during your internship, you may have the
          opportunity to work with us after graduation. We offer remote
          internships in various fields that provide real-world experience.
        </h1>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <h1 className="text-5xl justify-center mb-20 hover:underline font-bold">
          Key Features
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex flex-col gap-y-4  items-center justify-center max-w-lg p-6 bg-white rounded-xl shadow-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200"
              >
                <dt className="text-base leading-7 text-gray-600 ">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
