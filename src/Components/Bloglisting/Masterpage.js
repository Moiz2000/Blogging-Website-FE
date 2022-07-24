import React, { useState } from 'react';
import EmptyList from 'E:/blog/src/Components/Bloglisting/Bloglist/Blogitem/EmptyList';
import BlogList from 'E:/blog/src/Components/Bloglisting/Bloglist/BlogList';
import Header from 'E:/blog/src/Components/Bloglisting/Header';
import Search from 'E:/blog/src/Components/Bloglisting/Search';
import { blogList } from 'E:/blog/src/Components/Bloglisting/Bloglist/Blogitem/Data';
import Showblog from 'E:/blog/src/Components/Bloglisting/Showblog';

const Masterpage = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <Search
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Masterpage;
