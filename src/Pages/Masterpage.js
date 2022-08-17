import React, { useState } from 'react';
import EmptyList from '../Components/Bloglisting/Bloglist/Blogitem/EmptyList';
import BlogList from '../Components/Bloglisting/Bloglist/BlogList';
import Header from '../Components/Bloglisting/Header';
import Search from '../Components/Bloglisting/Search';
import { blogList } from '../Components/Bloglisting/Bloglist/Blogitem/Data';
import Showblog from '../Components/Bloglisting/Showblog';
import Topbar from '../Components/topbar/Topbar';

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
      <Topbar/>
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
