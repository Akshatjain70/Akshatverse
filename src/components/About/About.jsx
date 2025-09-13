import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                    
                <img src="/IMG_20250202_145617_232.jpg" alt="My Photo" />

                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                         About Me
                          B.Tech Computer Science (AIML) student with strong skills in HTML, 
                        CSS, JavaScript, and responsive UI design. Passionate about building user-friendly, 
                        cross-browser compatible web applications using modern frontend frameworks and tools. 
                        Looking for a frontend development internship to apply skills in React.js, API integration,
                         and performance optimization while contributing to real-world projects.

                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}