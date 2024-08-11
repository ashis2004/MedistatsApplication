import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import image1 from './assets/images/blog1.avif';
import image2 from './assets/images/blog2.avif';
import image3 from './assets/images/blog3.avif';
import image4 from './assets/images/blog4.avif';
import image5 from  './assets/images/blog5.avif';
import image6 from './assets/images/blog6.avif';
import image7 from './assets/images/blog7.avif';
import image8 from './assets/images/blog3.avif';
import image9 from  './assets/images/blog5.avif';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding ADHD in Children',
    excerpt: 'Learn about the symptoms, causes, and treatments for ADHD in children to help them thrive.',
    image: image1,
  },
  {
    id: 2,
    title: 'Recognizing Dyslexia Early',
    excerpt: 'Early recognition of dyslexia can make a significant difference in a child’s learning journey.',
    image: image2,
  },
  {
    id: 3,
    title: 'Signs of Autism Spectrum Disorder',
    excerpt: 'Identifying early signs of autism can help in providing the necessary support and interventions.',
    image: image3,
  },
  {
    id: 4,
    title: 'Effective Support for ADHD',
    excerpt: 'Discover strategies and resources for supporting children with ADHD in school and at home.',
    image: image4,
  },
  {
    id: 5,
    title: 'Teaching Strategies for Dyslexia',
    excerpt: 'Explore teaching strategies that can help children with dyslexia succeed academically.',
    image: image5,
  },
  {
    id: 6,
    title: 'Social Skills for Children with Autism',
    excerpt: 'Learn about activities and programs that can enhance social skills in children with autism.',
    image: image6,
  },
  {
    id: 7,
    title: 'Parenting Tips for ADHD',
    excerpt: 'Practical parenting tips for managing the challenges and celebrating the strengths of children with ADHD.',
    image: image7,
  },
  {
    id: 8,
    title: 'Assistive Technology for Dyslexia',
    excerpt: 'Discover assistive technology tools that can help children with dyslexia in their learning process.',
    image: image8,
  },
  {
    id: 9,
    title: 'Creating Inclusive Environments',
    excerpt: 'How to create inclusive environments for children with autism to foster their growth and development.',
    image: image9,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function BlogSection() {
  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Latest Blog Posts</h2>
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-teal-500 hover:text-teal-700">Read More</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
