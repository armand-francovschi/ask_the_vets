import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './BlogArticle.css'; // Import the styling for the blog article

const BlogArticle = () => {
  const { articleId } = useParams(); // To get the dynamic article ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate to navigate programmatically

  // You can fetch article data based on the articleId here or hardcode some for now
  
const articles = {
  1: {
    title: "Animal Health 101",
    content: `In this article, we discuss essential aspects of maintaining your pet's health. Regular check-ups, balanced diets, and exercise are key to ensuring a happy and healthy pet. Additionally, we delve into common health issues faced by pets, and how they can be prevented or managed effectively.`,
    additionalContent: `Regular grooming, vaccinations, and dental care are also crucial in maintaining your pet's overall well-being. Proper pet care extends not only to physical health but also to mental health. Activities like playtime, social interactions, and mental stimulation are just as important.`,
  },
  2: {
    title: "Caring for Your Dog",
    content: `This article provides detailed tips on dog care, covering topics such as feeding, grooming, training, and socialization. It also explores common dog breeds and their specific needs.`,
    additionalContent: `Understanding a dog's breed and personality traits helps in providing tailored care. For instance, smaller breeds may need more attention to their nutrition, while active, larger breeds require more exercise. Regular vet visits and maintaining vaccinations are emphasized.`,
  },
  3: {
    title: "Choosing the Right Pet",
    content: `Choosing the right pet involves understanding various factors like lifestyle, space, and time commitment. This article explores different pets and their suitability for different lifestyles, offering tips for prospective pet owners.`,
    additionalContent: `Whether you're considering a dog, cat, or exotic animal, it’s important to assess your ability to provide for their needs. Pet adoption and rescue stories are also discussed, highlighting how rewarding it can be to give a home to a pet in need.`,
  },
  4: {
    title: "Understanding Your Cat",
    content: `This article explains cat behavior and provides insights into caring for your feline friend. Topics include litter training, feeding habits, and health care.`,
    additionalContent: `Cats are independent animals, but they still require attention and care. Proper diet, regular vet check-ups, and creating a stimulating environment are crucial for a cat's health. Mental health is equally important, with activities like playtime and affection being key components.`,
  },
  5: {
    title: "How to Groom Your Pet at Home",
    content: `In this article, we'll provide you with a step-by-step guide on how to groom your pet at home. Learn how to bathe, brush, and trim your pet’s coat with the right tools, ensuring they stay healthy and comfortable.`,
    additionalContent: `Regular grooming helps maintain the health of your pet’s skin and coat. It's important to use the right grooming products that suit your pet’s breed. Keeping their nails trimmed and cleaning their ears are also key parts of at-home grooming.`,
  },
  6: {
    title: "Training Your Dog: A Guide for Beginners",
    content: `Training your dog can be an enjoyable and rewarding experience. This article covers the basics of dog training, including obedience commands, house training, and socialization with other animals and people.`,
    additionalContent: `Consistency and patience are essential in training your dog. Positive reinforcement techniques, such as rewards and praise, are great ways to encourage desired behaviors. It’s important to start training early to set a solid foundation for a well-behaved dog.`,
  },
  7: {
    title: "Preparing Your Home for a New Pet",
    content: `Getting your home ready for a new pet involves more than just buying supplies. This article provides tips on how to prepare your living space, making it safe and comfortable for your new furry friend.`,
    additionalContent: `Consider your pet's safety and comfort when setting up your home. Create a designated area for your pet, secure any hazards, and ensure they have a cozy spot to sleep. It’s also essential to introduce them slowly to their new environment to minimize stress.`,
  },
  8: {
    title: "Common Health Problems in Pets",
    content: `Pets can face a variety of health problems throughout their lives. In this article, we discuss the most common health issues in pets, including parasites, dental disease, and obesity, and how to prevent and manage them.`,
    additionalContent: `Regular check-ups with a veterinarian are key to catching health problems early. Preventive care, such as vaccinations and parasite control, can go a long way in keeping your pet healthy. Be sure to monitor your pet's weight and behavior for signs of potential health issues.`,
  },
  9: {
    title: "Pet Nutrition: What You Need to Know",
    content: `A well-balanced diet is essential for your pet’s overall health. In this article, we cover the basics of pet nutrition, including the importance of protein, fats, and vitamins for different pets.`,
    additionalContent: `Choosing the right pet food based on your pet’s breed, age, and activity level is crucial for their health. Discuss with your vet about special dietary needs for your pet, such as allergies or weight management.`,
  },
  10: {
    title: "Pet Nutrition: What You Need to Know",
    content: `A well-balanced diet is essential for your pet’s overall health. In this article, we cover the basics of pet nutrition, including the importance of protein, fats, and vitamins for different pets.`,
    additionalContent: `Choosing the right pet food based on your pet’s breed, age, and activity level is crucial for their health. Discuss with your vet about special dietary needs for your pet, such as allergies or weight management.`,
  },
  11: {
    title: "Pet Nutrition: What You Need to Know",
    content: `A well-balanced diet is essential for your pet’s overall health. In this article, we cover the basics of pet nutrition, including the importance of protein, fats, and vitamins for different pets.`,
    additionalContent: `Choosing the right pet food based on your pet’s breed, age, and activity level is crucial for their health. Discuss with your vet about special dietary needs for your pet, such as allergies or weight management.`,
  },
};

  const article = articles[articleId];

  if (!article) {
    return <h2>Article not found</h2>;
  }

  // Navigate back to the blog list page
  const handleBackToBlogs = () => {
    navigate('/blog'); // Adjust the path according to your routes (assuming '/blog' is the blog list page)
  };

  return (
    <div className="blog-article-container">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {article.additionalContent && <p>{article.additionalContent}</p>}
     <center> <button onClick={handleBackToBlogs} className="back-to-blogs-btn">
        Back to Blogs Browsing
      </button>
      </center>
    </div>
  );
};

export default BlogArticle;
