import React from 'react';
import BlogItem from 'E:/blog/src/Components/Bloglisting/Bloglist/Blogitem/BlogItem';
import 'E:/blog/src/Components/Bloglisting/styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
