import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
// import './dark-toastify.css'; // Your custom dark mode styles
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
    content: `
      Attention-Deficit/Hyperactivity Disorder (ADHD) is a common behavioral disorder in children. It affects their ability to focus and control impulses. Early diagnosis and intervention are crucial for managing ADHD effectively.

      Key Characteristic
      - Inattentio Difficulty sustaining attention in tasks or play activities.
      - Hyperactivit Excessive fidgeting, restlessness, and difficulty staying seated.
      - Impulsivit Interrupting others, difficulty waiting for one’s turn.

      Management Strategies:
      - Behavioral Therapy: Structured interventions to improve behavior and executive functioning.
      - Medication: Medications such as stimulants and non-stimulants can help manage symptoms.
      - Parent Training: Training for parents to develop effective strategies for supporting their child.
    `,
    image: image1,
    date: '2024-01-01',
    initialLikes: 10,
    initialRating: 4.5,
  },
  {
    id: 2,
    title: 'Understanding Dyslexia',
    content: `
      Dyslexia is a specific learning disability that affects reading and language processing skills. Children with dyslexia may struggle with decoding words, reading fluently, and understanding text.

      Signs of Dyslexia:
      - Reading Difficulty:** Struggles with reading accuracy and fluency.
      - Spelling Issues:** Challenges with spelling and writing.
      - Difficulty with Phonological Awareness:** Problems recognizing and manipulating sounds in words.

      Support Strategies:
      - Specialized Instruction: Use of multisensory approaches and structured literacy programs.
      - Accommodations: Providing extra time on tests and assignments, and using assistive technology.
      - Supportive Environment: Creating a positive and encouraging learning environment.
    `,
    image: image2,
    date: '2024-02-01',
    initialLikes: 8,
    initialRating: 4.3,
  },
  {
    id: 3,
    title: 'Supporting Children with Autism Spectrum Disorder',
    content: `
      Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, behavior, and social interactions. Supportive strategies can significantly improve the quality of life for children with ASD.

      Key Elements:
      - Sensory-friendly Design: Reducing sensory overload through thoughtful design.
      - Structured Activities: Providing clear and structured activities.
      - Supportive Staff: Training staff to understand and support children with autism.

      Benefits:
      - Increased Participation: Encouraging active participation in various activities.
      - Enhanced Social Skills: Providing opportunities to interact with peers.
      - Improved Behavior: Creating a calming and supportive environment.

      Implementation:
      - Collaborative Planning:** Working with parents and professionals to create inclusive plans.
      - Regular Feedback:** Gathering feedback from children, parents, and staff to make necessary adjustments.
    `,
    image: image3,
    date: '2024-03-01',
    initialLikes: 9,
    initialRating: 4.4,
  },
  {
    id: 4,
    title: 'Recognizing Signs of Anxiety in Children',
    content: `
      Anxiety disorders are common among children and can affect their daily functioning. Recognizing the signs early can help in providing timely support and treatment.

      Signs of Anxiety:
      - Excessive Worry: Frequent and intense worries about various aspects of life.
      - Physical Symptoms: Complaints of headaches, stomachaches, or other physical symptoms without a clear cause.
      - Avoidance Behavior: Avoiding situations or places that trigger anxiety.

      Support Strategies:
      - Cognitive Behavioral Therapy (CBT): Helping children manage their anxiety through structured therapy sessions.
      - Relaxation Techniques: Teaching methods to reduce stress and promote relaxation.
      - Parental Involvement: Encouraging parents to support their child through understanding and positive reinforcement.
    `,
    image: image4,
    date: '2024-04-01',
    initialLikes: 7,
    initialRating: 4.1,
  },
  {
    id: 5,
    title: 'Managing Oppositional Defiant Disorder (ODD)',
    content: `
      Oppositional Defiant Disorder (ODD) is characterized by a pattern of angry, irritable mood, argumentative behavior, or vindictiveness. Understanding and managing ODD is crucial for improving behavior and relationships.

      Symptoms of ODD:
      - Frequent Temper Tantrums: Outbursts of anger and frustration.
      - Argumentative Behavior: Consistently arguing with authority figures.
      - Vindictiveness: Seeking revenge or being spiteful.

      Management Strategies:
      - Behavioral Interventions: Implementing strategies to modify behavior and improve compliance.
      - Family Therapy: Working with the family to address communication issues and develop supportive strategies.
      - Consistent Discipline: Applying consistent and fair disciplinary actions to manage behavior.
    `,
    image: image5,
    date: '2024-05-01',
    initialLikes: 6,
    initialRating: 4.2,
  },
  {
    id: 6,
    title: 'Understanding Sensory Processing Disorder (SPD)',
    content: `
      Sensory Processing Disorder (SPD) involves difficulties in processing and responding to sensory information. Children with SPD may have unusual responses to sensory stimuli.

      Common Symptoms:
      - Overreacting to Sensory Input: Extreme responses to sounds, textures, or lights.
      - Underreacting to Sensory Input: Lack of response to sensory stimuli that would typically be noticed.
      - Difficulty with Coordination: Challenges with motor skills and coordination.

      Support Strategies:
      - ensory Integration Therapy: Using activities to help children process sensory information more effectively.
      - Creating a Sensory-friendly Environment: Adjusting the environment to reduce sensory overload.
      - Routine and Structure: Providing a predictable routine to help children feel more secure.
    `,
    image: image6,
    date: '2024-06-01',
    initialLikes: 5,
    initialRating: 4.0,
  },
  {
    id: 7,
    title: 'Identifying and Supporting Children with Conduct Disorder',
    content: `
      Conduct Disorder is characterized by a persistent pattern of behavior that violates societal norms and the rights of others. Identifying and addressing this disorder early can lead to better outcomes.

      Signs of Conduct Disorder:
      - Aggressive Behavior: Physical fights or cruelty to animals.
      - Deceitfulness: Lying or stealing.
      - Severe Rule Violations: Breaking rules and engaging in illegal activities.

      Support Strategies:
      - Therapeutic Interventions: Utilizing therapies that address behavior and promote positive change.
      - Family Support: Engaging the family in the treatment process to improve family dynamics.
      - Educational Support: Collaborating with schools to create supportive educational plans.
    `,
    image: image7,
    date: '2024-07-01',
    initialLikes: 4,
    initialRating: 3.9,
  },
  {
    id: 8,
    title: 'Supporting Children with Social Anxiety Disorder',
    content: `
      Social Anxiety Disorder involves intense fear of social situations where one might be judged or scrutinized. It can significantly impact a child's social development.

      Symptoms of Social Anxiety:
      - **Fear of Social Interaction: Extreme fear of meeting new people or speaking in public.
      - **Avoidance Behavior: Avoiding social situations whenever possible.
      - **Physical Symptoms: Symptoms like sweating, trembling, or nausea in social settings.

      Support Strategies:
      - Gradual Exposure: Slowly introducing children to social situations to build confidence.
      - Social Skills Training: Teaching children effective social skills and coping mechanisms.
      - Professional Therapy: Engaging in therapy to address underlying fears and anxieties.
    `,
    image: image8,
    date: '2024-08-01',
    initialLikes: 6,
    initialRating: 4.1,
  },
  {
    id: 9,
    title: 'Recognizing and Managing Obsessive-Compulsive Disorder (OCD) in Children',
    content: `
      Obsessive-Compulsive Disorder (OCD) involves persistent, unwanted thoughts and repetitive behaviors. Early recognition and intervention are key to managing OCD effectively.

      Symptoms of OCD:
      - Obsessions: Persistent, intrusive thoughts or images.
      - Compulsions: Repetitive behaviors or mental acts performed to alleviate the distress caused by obsessions.
      - Interference with Daily Life: Symptoms that disrupt daily activities and routines.

      Management Strategies:
      - Cognitive Behavioral Therapy (CBT):** Therapy focusing on changing patterns of thinking and behavior.
      - Medication: Use of selective serotonin reuptake inhibitors (SSRIs) to manage symptoms.
      - Family Involvement: Working with families to support the child and implement strategies at home.
    `,
    image: image9,
    date: '2024-09-01',
    initialLikes: 7,
    initialRating: 4.3,
  },
];
 

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));
  const [likes, setLikes] = useState(post ? post.initialLikes : 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [rating, setRating] = useState(post ? post.initialRating : 0);
  const [hasRated, setHasRated] = useState(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      toast.success('You liked this post!');
    }
  };

  const handleRating = (newRating) => {
    if (!hasRated) {
      setRating(newRating);
      setHasRated(true);
      toast.success(`You rated this post ${newRating} stars!`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-24">
      <ToastContainer />
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-6 rounded-lg" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{post.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600 dark:text-gray-400">Posted on {post.date}</span>
        <div className="flex items-center">
          <button
            onClick={handleLike}
            className={`mr-4 ${hasLiked ? 'text-gray-500 cursor-not-allowed' : 'text-teal-500 hover:text-teal-700'}`}
            disabled={hasLiked}
          >
            👍 {likes}
          </button>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className={`text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'} ${hasRated ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={hasRated}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="text-gray-700 dark:text-gray-300">
        {post.content.split('\n\n').map((para, index) => (
          <p key={index} className="mb-4">{para}</p>
        ))}
      </div>
    </div>
  );
}
