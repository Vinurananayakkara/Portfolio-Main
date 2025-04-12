import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id ="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-blue-600 mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bachelor of Technology (Hons) in ICT</h3>
            <p className="text-gray-600">General Sir John Kotelawala Defence University</p>
            <p className="text-gray-500">2023 - Present</p>
            <p className="text-blue-600 mt-2">GPA: 3.7+</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-blue-600 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Level Examination</h3>
            <p className="text-gray-600">Rahula College - Matara</p>
            <p className="text-gray-500">2021/2022</p>
            <p className="text-gray-600 mt-2">Physical Science Stream</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;