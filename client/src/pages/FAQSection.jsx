import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the purpose of the Medistats platform?",
    answer: "Medistats aims to detect behavioral disorders in children through a combination of machine learning algorithms and extensive surveys. The platform uses labeled data to train models that can provide insights and early detection of disorders such as ADHD, Dyslexia, and Autism.",
  },
  {
    question: "How does the machine learning model work?",
    answer: "The machine learning model is trained using labeled and surveyed data collected from various sources. It analyzes patterns and correlations within the data to identify potential behavioral disorders. The model is continually updated and refined based on new data to improve accuracy.",
  },
  {
    question: "What types of behavioral disorders does Medistats detect?",
    answer: "Medistats is designed to detect a range of behavioral disorders, including ADHD, Dyslexia, and Autism. The platform provides detailed assessments and recommendations based on the symptoms and behaviors identified in the data.",
  },
  {
    question: "How is data collected for the model?",
    answer: "Data is collected through surveys, assessments, and clinical evaluations. This data is then labeled and used to train the machine learning model, ensuring that it can accurately recognize and classify different behavioral disorders.",
  },
  {
    question: "How can parents use Medistats?",
    answer: "Parents can use Medistats to assess their child's behavior and receive insights into potential disorders. The platform offers tools and resources to help parents understand the results and take appropriate action if needed.",
  },
  {
    question: "Is the data collected by Medistats secure?",
    answer: "Yes, Medistats prioritizes data security and privacy. All data collected is encrypted and stored securely, and the platform adheres to strict privacy policies to protect user information.",
  },
  {
    question: "How accurate is the diagnosis provided by Medistats?",
    answer: "The accuracy of the diagnosis depends on the quality and quantity of the data used to train the model. Medistats strives to maintain high accuracy by continuously updating the model with new data and refining its algorithms.",
  },
  {
    question: "Can Medistats replace professional medical advice?",
    answer: "No, Medistats is a tool to aid in the early detection of behavioral disorders but should not replace professional medical advice. It is important for parents and caregivers to consult with healthcare professionals for a comprehensive evaluation and diagnosis.",
  },
  {
    question: "How often is the machine learning model updated?",
    answer: "The machine learning model is updated regularly based on new data and research. Continuous updates ensure that the model remains accurate and relevant in detecting and assessing behavioral disorders.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="  bottom-0 left-0 right-0 bg-teal-700 h-16 skew-y-1 transform -translate-y-8 mt-32"></div>

      <div className="max-w-6xl mx-auto px-4 mt-32">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div 
                className="cursor-pointer flex justify-between items-center" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{faq.question}</h3>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
