/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookMarks, handleMarksAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs..json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="w-2/3">
        {blogs.map((blog, idx) => (
          <Blog
            key={idx}
            blog={blog}
            handleAddToBookMarks={handleAddToBookMarks}
            handleMarksAsRead={handleMarksAsRead}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
