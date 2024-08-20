import React, { useEffect, useState } from 'react';
import "../style/blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://hospital-management-backend-3.onrender.com/api/v1/blog/getall');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog">
      <svg className="shape shape1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg className="shape shape2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" />
      </svg>
      <svg className="shape shape3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,15 90,80 10,80" />
      </svg>
      <svg className="shape shape4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="50" ry="30" />
      </svg>
      <svg className="shape shape5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="20" />
      </svg>
      <svg className="shape shape6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,97.5 5,97.5" />
      </svg>
      <svg className="shape shape7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" />
      </svg>
      <svg className="shape shape8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="30" y="30" width="40" height="40" />
      </svg>
      <svg className="shape shape9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="40" ry="20" />
      </svg>
      <svg className="shape shape10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" />
      </svg>
      
      <div className="container">
        <div className="blog-heading">
          <h1>Our Latest Blog</h1>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog._id}>
              <div className="blog-card">
                <div className="blog-card-img">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-text">
                    <div className="blog-meta">
                      <p className="date">{new Date(blog.date).toLocaleDateString()}</p>
                      <p className="author">By {blog.author}</p>
                    </div>
                    <h5 className="title">{blog.title}</h5>
                    <p className="excerpt">
                      {blog.excerpt} <a href="#" className="blog-readmore">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
