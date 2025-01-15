import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Assuming your styles are in this file

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Animal Health 101',
      description: 'A beginner\'s guide to keeping your animal healthy.',
      imageUrl: 'https://example.com/animal1.jpg',
    },
    {
      id: 2,
      title: 'Caring for Your Dog',
      description: 'Tips and tricks for taking care of your dog.',
      imageUrl: 'https://example.com/animal2.jpg',
    },
    {
      id: 3,
      title: 'Choosing the Right Pet',
      description: 'How to choose the perfect pet for your family.',
      imageUrl: 'https://example.com/animal3.jpg',
    },
    {
      id: 4,
      title: 'Understanding Your Cat',
      description: 'Everything you need to know about cats.',
      imageUrl: 'https://example.com/animal4.jpg',
    },
  ];

  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="cards-container">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
            <div className="card-image-container">
              <img src={post.imageUrl} alt={post.title} className="card-image" />
            </div>
            <div className="card-title">{post.title}</div>
            <div className="card-description">{post.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
