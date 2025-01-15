import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Assuming your styles are in this file

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Animal Health 101',
      description: 'A beginner\'s guide to keeping your animal healthy.',
      imageUrl: 'https://picsum.photos/id/1011/800/450',
    },
    {
      id: 2,
      title: 'Caring for Your Dog',
      description: 'Tips and tricks for taking care of your dog.',
      imageUrl: 'https://picsum.photos/id/1005/800/450',
    },
    {
      id: 3,
      title: 'Choosing the Right Pet',
      description: 'How to choose the perfect pet for your family.',
      imageUrl: 'https://picsum.photos/id/103/800/450',
    },
    {
      id: 4,
      title: 'Understanding Your Cat',
      description: 'Everything you need to know about cats.',
      imageUrl: 'https://picsum.photos/id/104/800/450',
    },
    {
      id: 5,
      title: 'How to Groom Your Pet at Home',
      description: 'A simple guide to grooming your pet without professional help.',
      imageUrl: 'https://picsum.photos/id/110/800/450',
    },
    {
      id: 6,
      title: 'Training Your Dog: A Guide for Beginners',
      description: 'Start training your dog with these simple tips.',
      imageUrl: 'https://picsum.photos/id/106/800/450',
    },
    {
      id: 7,
      title: 'Preparing Your Home for a New Pet',
      description: 'Tips for getting your home ready for a new furry friend.',
      imageUrl: 'https://picsum.photos/id/107/800/450',
    },
    {
      id: 8,
      title: 'Common Health Problems in Pets',
      description: 'How to identify and prevent common health issues in pets.',
      imageUrl: 'https://picsum.photos/id/108/800/450',
    },
    {
      id: 9,
      title: 'Pet Nutrition: What You Need to Know',
      description: 'Understanding your pet’s dietary needs for a healthy life.',
      imageUrl: 'https://picsum.photos/id/109/800/450',
    },
    {
      id: 10,
      title: 'Pet Nutrition: What You Need to Know',
      description: 'Understanding your pet’s dietary needs for a healthy life.',
      imageUrl: 'https://picsum.photos/id/109/800/450',
    },
    {
      id: 11,
      title: 'Pet Nutrition: What You Need to Know',
      description: 'Understanding your pet’s dietary needs for a healthy life.',
      imageUrl: 'https://picsum.photos/id/109/800/450',
    }
  ];

  return (
    <section className="articles">
      {blogPosts.map((post) => (
        <article key={post.id}>
          <div className="article-wrapper">
            <figure>
              <img src={post.imageUrl} alt={post.title} />
            </figure>
            <div className="article-body">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read more
                <span className="sr-only">about {post.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Blog;
