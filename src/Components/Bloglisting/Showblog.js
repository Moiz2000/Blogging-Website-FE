import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from 'E:/blog/src/Components/Bloglisting/Bloglist/Blogitem/Data';
import Tag from 'E:/blog/src/Components/Bloglisting/Bloglist/Tag';
import EmptyList from 'E:/blog/src/Components/Bloglisting/Bloglist/Blogitem/EmptyList';
import 'E:/blog/src/Components/Bloglisting/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Chip from 'E:/blog/src/Components/Common/Chip';

const Showblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Showblog;
