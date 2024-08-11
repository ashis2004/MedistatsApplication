import React from 'react';

export const BlogParagraph = ({ children }) => <p className="text-gray-700 dark:text-gray-300 mb-4">{children}</p>;

export const BlogHeading = ({ children }) => <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{children}</h2>;

export const BlogList = ({ items }) => (
  <ul className="list-disc ml-6">
    {items.map((item, index) => (
      <li key={index} className="text-gray-700 dark:text-gray-300">
        <strong>{item.label}:</strong> {item.description}
      </li>
    ))}
  </ul>
);
