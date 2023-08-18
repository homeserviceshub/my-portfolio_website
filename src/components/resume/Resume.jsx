import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-green-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-green-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  NetWeb Tecnologies
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                  June 2022 - Jan 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  During my internship at Netweb Technologies Pvt. Ltd., I
                  seized the invaluable opportunity to immerse myself in the
                  realm of web development, leveraging React.js and Next.js to
                  their full potential. This hands-on experience from live
                  projects not only refined my technical acumen but also granted
                  me profound insights into the collaborative and dynamic nature
                  of a professional development environment. The journey wasn't
                  just about coding; it was about fostering innovation,
                  communication, and growth.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-green-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-green-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Amritsar College of engg. and techology
                </span>
                <span className=" text-[.9rem] font-semibold text-green-500 sm:text-base">
                  Year 2019 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  I pursued a Bachelor of Technology in Computer Science from
                  Amritsar College of Engg. and Technology College, graduating
                  in 2023 with a CGPA of 7. Throughout my academic journey, I
                  engaged in diverse projects that translated theoretical
                  knowledge into practical solutions. My participation in coding
                  competitions honed my ability to solve complex problems under
                  pressure. Collaborating with peers on group projects refined
                  my teamwork and leadership skills. Beyond academics, I
                  actively participated in clubs and workshops.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
