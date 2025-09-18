import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-4/12">
                    
                <img src="/Screenshot_2025-09-15-00-42-32-064_com.android.chrome.JPG" alt="My Photo" />

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
                          <h2 className='text-black text-2xl'>Currency Converter Web App </h2>
                        •	Built using React.js, HTML, CSS, and JavaScript.
                        •	Fetches real-time exchange rates via API integration. 

                         <a className='text-blue-600 text-right' 
                         href="https://calm-mermaid-9ffaff.netlify.app/" target="_blank">
                         currency converter
                        </a>
            

                         <h2 className='text-black text-2xl'>  Weather App</h2>
                        •	Created a real-time weather forecast application with responsive UI.
                        •	Integrated OpenWeather API to fetch temperature, humidity, and conditions.
                        •	Optimized API requests for fast performance .

                         <a className='text-blue-600 text-right' 
                         href="https://bejewelled-trifle-08d27b.netlify.app/" target="_blank">
                         Weather App
                        </a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
