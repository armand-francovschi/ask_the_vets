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
    }
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
