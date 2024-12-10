import React from "react";

const About = () => {
  return (
    <section className="px-8 py-16 bg-gray-100 h-screen flex flex-col justify-center ">
      <div className="align-elements">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Learn more about our mission, vision, and the passionate team
            driving our success.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            At our core, we aim to create meaningful and sustainable solutions
            that positively impact the lives of our customers and the
            environment. We are dedicated to fostering innovation and building a
            community around our shared values.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            We envision a world where creativity and sustainability go hand in
            hand, inspiring future generations to innovate and lead with
            purpose.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Alex Johnson
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
